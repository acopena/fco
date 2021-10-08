import { coerceStringArray } from '@angular/cdk/coercion';
import { Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-sitesmenu',
  templateUrl: './sitesmenu.component.html',
  styleUrls: ['./sitesmenu.component.scss']
})
export class SitesmenuComponent  {

  isLogIn = true;
  title = 'fco';
  events = 'sports';
  constructor(private el: ElementRef) {}

  OnSelectedMenu(category: string, e: any): void {
    this.events = category;
    // var lnk = e.el.nativeElement;
    // console.log(lnk);

    const nav = this.el.nativeElement.querySelectorAll('a') as any;
    for (const item of nav) {
      if (item.className === 'nav-link active') {
        item.className = 'nav-link';
      }
    }
  }

}
