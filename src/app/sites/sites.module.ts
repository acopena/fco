import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    CouplebikerComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SitesModule { }
