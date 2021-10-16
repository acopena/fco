import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxEditorModule } from 'ngx-editor';

import { Routes, RouterModule, ɵROUTER_PROVIDERS } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table' ;

import { UserlistComponent } from './userlist/userlist.component';
import { AdminmenuComponent } from './adminmenu/adminmenu.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GrouplistComponent } from './grouplist/grouplist.component';
import { ContentComponent } from './content/content.component';
import { ContentlistComponent } from './contentlist/contentlist.component';

@NgModule({
  declarations: [
    UserlistComponent,
    AdminmenuComponent,
    DashboardComponent,
    GrouplistComponent,
    ContentComponent,
    ContentlistComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgxEditorModule,
    MatTableModule
  ],
  exports: [ AdminmenuComponent]

})
export class AdminModule { }
