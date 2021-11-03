import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { StorageService } from '../../service/storage.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Group } from '../../model/group.model';
import { Content } from '../../model/content.model';
import { GroupedObservable } from 'rxjs';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss'],
})
export class InfoComponent implements OnInit {
  @Input() groupName!: string;
  errorMessage = '';
  grpList: Group[] = this.storage.retrieve('GroupList') as Group[];
  contents: Content[] = [];

  constructor(
    private api: ApiService,
    private readonly router: Router,
    private storage: StorageService,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      console.log('parameter :' + params['id']);
      this.groupName = params['id'];
      console.log(this.grpList);
      console.log(this.groupName);
      const grpName = this.grpList.find((s) => s.groupLink === this.groupName);
      if (grpName != null) {
        console.log(grpName);
        console.log(grpName?.groupId);
        const url = 'fcoContent/GetFCO_ContentByGroupId?id=' + grpName?.groupId;
        this.api.get(url).subscribe(
          (result) => {
            this.contents = result as Content[];
            console.log(this.contents);
          },
          (error) => (this.errorMessage = error)
        );
      }
    });
  }
}
