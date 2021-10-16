import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule, ɵROUTER_PROVIDERS } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

import { RecreationhomeComponent } from './recreation/recreationhome/recreationhome.component';
import { IntegrationComponent } from './integration/integration.component';
import { EventshomeComponent } from './events/eventshome/eventshome.component';
import { BasketballComponent } from './sports/basketball/basketball.component';
import { TennisComponent } from './sports/tennis/tennis.component';
import { PickelballComponent } from './sports/pickelball/pickelball.component';
import { BadmintonComponent } from './sports/badminton/badminton.component';
import { PingpongComponent } from './sports/pingpong/pingpong.component';
import { PppComponent } from './recreation/ppp/ppp.component';
import { CouplebikerComponent } from './recreation/couplebiker/couplebiker.component';
import { GolfComponent } from './recreation/golf/golf.component';
import { SitesmenuComponent } from './sitesmenu/sitesmenu.component';

import { Menu2Component } from './menu2/menu2.component';
import { SportshomeComponent } from './sports/sportshome/sportshome.component';
import { BusinesshomeComponent } from './business/businesshome/businesshome.component';

import { IndependencedayComponent } from './events/independenceday/independenceday.component';
import { CruzadodentureComponent } from './business/cruzadodenture/cruzadodenture.component';
import { ReligionhomeComponent } from './religion/religionhome/religionhome.component';
import { FccComponent } from './religion/fcc/fcc.component';
import { BayshorebasketballComponent } from './sports/bayshorebasketball/bayshorebasketball.component';
import { OttawatitansComponent } from './sports/ottawatitans/ottawatitans.component';

@NgModule({
  declarations: [
    AboutComponent,
    HomeComponent,

    RecreationhomeComponent,
    IntegrationComponent,
    BasketballComponent,
    TennisComponent,
    PickelballComponent,
    BadmintonComponent,
    PingpongComponent,
    PppComponent,
    CouplebikerComponent,
    GolfComponent,
    SitesmenuComponent,

    Menu2Component,
    SportshomeComponent,
    BusinesshomeComponent,
    EventshomeComponent,
    IndependencedayComponent,
    CruzadodentureComponent,
    ReligionhomeComponent,
    FccComponent,
    BayshorebasketballComponent,
    OttawatitansComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  exports: [ SitesmenuComponent,  Menu2Component, BasketballComponent, BadmintonComponent]
})
export class SitesModule { }
