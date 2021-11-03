import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, AfterViewInit, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, SortDirection } from '@angular/material/sort';
import { merge, Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

import { ApiService } from '../../service/api.service';
import { AsyncPipe } from '@angular/common';

import { coerceStringArray } from '@angular/cdk/coercion';

@Component({
  selector: 'app-contentlist',
  templateUrl: './contentlist.component.html',
  styleUrls: ['./contentlist.component.scss'],
})
export class ContentlistComponent implements OnInit, AfterViewInit {
  public displayedColumns: string[] = ['contentId', 'contentTitle', 'groupName', 'publishedStartDate', 'publishedEndDate'];
  exampleDatabase!: DBHttp | null;
  data: ItemList[] = [];

  resultsLength = 0;
  isLoadingResults = true;
  isRateLimitReached = false;

  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;

  @ViewChild(MatSort,  { static: false }) sort!: MatSort;

  constructor(private api: ApiService, private httpClient: HttpClient){
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    console.log('initiating ngafteviewinit');
    this.exampleDatabase = new DBHttp(this.api);

    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    // If the user changes the sort order, reset back to the first page.
   // this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));

    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {

          this.isLoadingResults = true;
          return this.exampleDatabase!.getRepoIssues(
            this.sort.active,
            this.sort.direction,
            this.paginator.pageIndex
          ).pipe(catchError(() => observableOf(null)));
        }),
        map((item) => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = item === null;

          if (item === null) {
            return [];
          }
          this.resultsLength = item.recordCount;
          console.log('total count:' + this.resultsLength);
          console.log(item);
          return item.data;
        })
      )
      .subscribe((data) => {
          console.log('subscribe data');
          this.data = data;
          console.log(data);
      });
  }
}

export class DBHttp {
  constructor(private api: ApiService) {}
  getRepoIssues(
    sort: string, order: SortDirection,
    page: number
  ): Observable<DataContent> {
    const href = 'fcocontent/getFCO_ContentList';
    const requestUrl = `${href}?sort=${sort}&order=${order}&pageSize=10&page=${
      page + 1
    }`;
    console.log(requestUrl);
    return this.api.get(requestUrl);
  }
}

export interface ItemList {
  contentId: number;
  Title: string;
  contentTypeName: string;
}

export interface DataContent {
  data: ItemList[];
  recordCount: number;
}
