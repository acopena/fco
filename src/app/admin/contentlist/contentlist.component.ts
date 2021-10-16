import { Component, OnInit, AfterViewInit,  ViewChild} from '@angular/core';

import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';


import { ApiService } from '../../service/api.service';
import { AsyncPipe } from '@angular/common';
import { Observable, of, merge } from 'rxjs';
import { map, catchError, startWith, switchMap } from 'rxjs/operators';


export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-contentlist',
  templateUrl: './contentlist.component.html',
  styleUrls: ['./contentlist.component.scss']
})
export class ContentlistComponent implements OnInit, AfterViewInit {

  public displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  @ViewChild(MatSort) sort: any;

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.dataSource.sort = this.sort;
  }

}


export class DBHttp {
  constructor(private api: ApiService) { }
  getDB(sort: string, order: string, page: number,  params: string, isort: MatSort): Observable<any> {
    const href = 'official/getlist';
    const requestUrl = `${href}?${params}&sort=${sort}&order=${order}&page=${page + 1}`;
    return this.api.get(requestUrl);
  }
}

interface Paging {
  pageSize: number;
  currentPage: number;
  sort: string;
  order: string;
}
