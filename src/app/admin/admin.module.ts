import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Routes, RouterModule, ɵROUTER_PROVIDERS } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { UserlistComponent } from './userlist/userlist.component';
import { AdminmenuComponent } from './adminmenu/adminmenu.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    UserlistComponent,
    AdminmenuComponent,
    DashboardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  exports: [ AdminmenuComponent]

})
export class AdminModule { }
