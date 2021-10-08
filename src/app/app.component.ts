import { coerceStringArray } from '@angular/cdk/coercion';
import { Component, ElementRef } from '@angular/core';
import {  Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  isLogIn = false;
  title = 'fco';
  events = 'sports';
  constructor(private el: ElementRef, private readonly router: Router) {}

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
