import { Component, OnInit, Input } from '@angular/core';
import { Group } from '../../model/group.model';

@Component({
  selector: 'app-menu2',
  templateUrl: './menu2.component.html',
  styleUrls: ['./menu2.component.scss']
})
export class Menu2Component implements OnInit {

  @Input() menu: Group[] = [];
  @Input() homepage = '';
  constructor() { }

  ngOnInit(): void {
    console.log('this is menu2 list menu');
    console.log(this.menu);
  }

}
