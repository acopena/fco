import { coerceStringArray } from '@angular/cdk/coercion';
import { Component, ElementRef, OnInit } from '@angular/core';
import { Group } from '../../model/group.model';
import { StorageService } from '../../service/storage.service';

@Component({
  selector: 'app-sitesmenu',
  templateUrl: './sitesmenu.component.html',
  styleUrls: ['./sitesmenu.component.scss']
})
export class SitesmenuComponent implements OnInit {

  public groupList: Group[] = [];
  isLogIn = true;
  title = 'fco';
  public options = '';
  public homepage = '';


  public menuList: Group[] = [];
  constructor(private el: ElementRef, private storage: StorageService) {}

  ngOnInit(): void{
     this.groupList = this.storage.retrieve('GroupList') as Group[];
     console.log('this will get  the grouplist from session ');
     console.log(this.groupList);
  }

  OnSelectedMenu(grptypeId: number, homepage: string, e: any): void {
    this.menuList = this.groupList.filter(s => s.groupTypeId === grptypeId);
    this.homepage = homepage;
    console.log('filtered menulist based on group type');
    console.log(this.menuList);

    const nav = this.el.nativeElement.querySelectorAll('a') as any;
    for (const item of nav) {
      if (item.className === 'nav-link active') {
        item.className = 'nav-link';
      }
    }
  }

}
