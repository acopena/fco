import { Component, OnInit, OnDestroy, DoCheck } from '@angular/core';
import { Editor } from 'ngx-editor';

import {
  FormControl,
  FormGroup,
  Validators,
  FormBuilder,
  FormArray,
  NgForm,
} from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ApiService } from '../../service/api.service';
import { StorageService } from '../../service/storage.service';
import * as moment from 'moment';
import { Group } from '../../model/group.model';
import { Content } from '../../model/content.model';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss'],
})
export class ContentComponent implements OnInit, OnDestroy, DoCheck {
  editor: any = Editor;
  public html: any = '';
  grpList: Group[] = this.storage.retrieve('GroupList') as Group[];

  public webContent = '';
  public web: Content = {
    contentId: 0,
    contentTitle: '',
    contentDetails: '',
    userId: 0,
    publishedStartDate: new Date(),
    publishedEndDate: new Date(),
    contentTypeId: 0,
    contentTypeName: '',
    groupId: 0,
    groupName: ''
  };
  public userInfo: any;
  public webContentTypeList: any[] = [];

  public webPageTypeList: any;
  public yearList: number[] = [];
  public dayList: number[] = [];
  public publishedStartDayList: number[] = [];
  public publisedEndDayList: number[] = [];

  public isValid = false;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private api: ApiService,
    private storage: StorageService,
  ) {}
  ngOnDestroy(): void {
    // this.editor.destroy();
  }
  ngOnInit(): void {
    this.initVar();

    this.userInfo = this.api.getUserSession();

    let url = 'fcocontent/GetFCO_ContentTypeList';
    console.log(url);
    this.api.get(url).subscribe((result) => {
      this.webContentTypeList = result;
    });

    if (this.userInfo != null) {
      this.web.userId   = this.userInfo.userId;
    }
    this.activatedRoute.params.subscribe((params: Params) => {
      console.log('parameter :' +  params['id']);
      this.web.contentId = params['id'];

      if (this.web.contentId > 0) {
        url = 'fcoContent/GetFCO_ContentById?id=' + this.web.contentId;
        this.api.get(url).subscribe((result) => {
          this.web = result;
          console.log(this.web);
          this.web.publishedStartDate  = new Date(this.web.publishedStartDate);
          this.web.publishedEndDate = new Date(this.web.publishedEndDate);
        });
      }
    });
  }

  initVar(): void {
    this.web = {
      contentId: 0,
      contentTitle: '',
      contentDetails: '',
      userId: 0,
      publishedStartDate: new Date(),
      contentTypeId: 0,
      contentTypeName: '',
      publishedEndDate: new Date(),
      groupId: 0,
      groupName: ''
    } as Content;
    this.isValid = false;
    const today = new Date();
  }

  ngDoCheck(): void {
    if (
      this.web.contentDetails !== '' &&
      this.web.contentTitle !== '' &&
      this.web.contentTypeId > 0 &&
      this.web.publishedStartDate.toString() !== '' &&
      this.web.publishedEndDate.toString() !== ''
    ) {
      this.isValid = true;
    }
  }

  onSubmit(): void {
    const pUrl = 'fcoContent/PostFCO_Content';

    const sDate1 = moment(this.web.publishedStartDate).local();
    const eDate1 = moment(this.web.publishedEndDate).local();
    console.log(sDate1);
    console.log(eDate1);

    const sDate =
      sDate1.year().toString() +
      '/' +
      (sDate1.month() + 1).toString() +
      '/' +
      sDate1.date().toString();

    const eDate =
      eDate1.year().toString() +
      '/' +
      (eDate1.month() + 1).toString() +
      '/' +
      eDate1.date().toString();

    const body = new URLSearchParams();
    console.log(sDate);

    console.log(this.web.contentId);
    body.set('ContentId', this.web.contentId.toString());
    body.set('ContentTitle', this.web.contentTitle);
    body.set('ContentDetails', this.web.contentDetails);
    body.set('UserId', this.userInfo.userId.toString());
    body.set('GroupId', this.web.groupId.toString());

    body.set('PublishStartYear', sDate1.year().toString());
    body.set('PublishStartMonth', (sDate1.month() + 1).toString());
    body.set('PublishStartDay', sDate1.date().toString());

    body.set('PublishedEndYear', eDate1.year().toString());
    body.set('PublishedEndMonth', (eDate1.month() + 1).toString());
    body.set('PublishedEndDay', eDate1.date().toString());

    body.set('ContentTypeId', this.web.contentTypeId.toString());

    this.api.post(pUrl, body.toString()).subscribe((data) => {
      this.router.navigate(['/contentlist']);
    });
  }
}
