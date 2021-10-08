import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, ɵROUTER_PROVIDERS } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { SportsComponent } from './sports/sports.component';
import { RecreationComponent } from './recreation/recreation.component';
import { IntegrationComponent } from './integration/integration.component';
import { EventsComponent } from './events/events.component';
import { BasketballComponent } from './basketball/basketball.component';
import { TennisComponent } from './tennis/tennis.component';
import { PickelballComponent } from './pickelball/pickelball.component';
import { BadmintonComponent } from './badminton/badminton.component';
import { PingpongComponent } from './pingpong/pingpong.component';
import { PppComponent } from './ppp/ppp.component';
import { CouplebikerComponent } from './couplebiker/couplebiker.component';
import { GolfComponent } from './golf/golf.component';
import { SitesmenuComponent } from './sitesmenu/sitesmenu.component';
import { SportsmenuComponent } from './submenu/sportsmenu/sportsmenu.component';
import { RecreationmenuComponent } from './submenu/recreationmenu/recreationmenu.component';
import { IntegrationmenuComponent } from './submenu/integrationmenu/integrationmenu.component';
import { EventsmenuComponent } from './submenu/eventsmenu/eventsmenu.component';

@NgModule({
  declarations: [
    AboutComponent,
    HomeComponent,
    SportsComponent,
    RecreationComponent,
    IntegrationComponent,
    EventsComponent,
    BasketballComponent,
    TennisComponent,
    PickelballComponent,
    BadmintonComponent,
    PingpongComponent,
    PppComponent,
    CouplebikerComponent,
    GolfComponent,
    SitesmenuComponent,
    SportsmenuComponent,
    RecreationmenuComponent,
    IntegrationmenuComponent,
    EventsmenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  exports: [ SitesmenuComponent, IntegrationmenuComponent, EventsmenuComponent , RecreationmenuComponent,  SportsmenuComponent,
    EventsmenuComponent]
})
export class SitesModule { }
