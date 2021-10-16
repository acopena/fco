import { coerceStringArray } from '@angular/cdk/coercion';
import { Component, ElementRef, OnInit } from '@angular/core';
import { ApiService } from './service/api.service';
import { StorageService } from './service/storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  isLogIn = true;
  title = 'fco';
  events = 'sports';
  errorMessage = '';
  public userInfo: any;
  constructor(
    private el: ElementRef,
    private readonly router: Router,
    private api: ApiService,
    private storage: StorageService
  ) {}

  ngOnInit(): void {
    // Check if user previously log in local storage
    if (localStorage.getItem('currentUser') != null) {
        this.userInfo = localStorage.getItem('currentUser');
        if (this.userInfo.email !== '') {
          this.isLogIn = true;
        }
    }

    const url = 'fcoGroup/GetFCO_GroupList';
    this.api.get(url).subscribe(
      (result) => {
        localStorage.removeItem('GroupList');
        this.storage.store('GroupList', result);
        console.log(result);
      },
      (error) => (this.errorMessage = error)
    );
  }
  // OnSelectedMenu(category: string, e: any): void {
  //   this.events = category;
  //   var lnk = e.el.nativeElement;
  //   console.log(lnk);

  //   let nav = this.el.nativeElement.querySelectorAll('a') as any;
  //   for (let item of nav) {
  //     if (item.className === 'nav-link active') {
  //       item.className = 'nav-link';
  //     }
  //   }
  // }
}
