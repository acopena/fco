import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './sites/about/about.component';
import { HomeComponent } from './sites/home/home.component';
import { SportsComponent } from './sites/sports/sports.component';
import { RecreationComponent } from './sites/recreation/recreation.component';
import { IntegrationComponent } from './sites/integration/integration.component';
import { EventsComponent } from './sites/events/events.component';

import { BasketballComponent } from './sites/basketball/basketball.component';
import { TennisComponent } from './sites/tennis/tennis.component';
import { PickelballComponent } from './sites/pickelball/pickelball.component';
import { BadmintonComponent } from './sites/badminton/badminton.component';
import { PingpongComponent } from './sites/pingpong/pingpong.component';
import { PppComponent } from './sites/ppp/ppp.component';
import { CouplebikerComponent } from './sites/couplebiker/couplebiker.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'sports', component: SportsComponent },
  { path: 'recreation', component: RecreationComponent },
  { path: 'integration', component: IntegrationComponent },
  { path: 'events', component: EventsComponent },
  { path: 'aboutus', component: AboutComponent },

  { path: 'basketball', component: BasketballComponent },
  { path: 'tennis', component: TennisComponent },
  { path: 'pickelball', component: PickelballComponent },
  { path: 'badminton', component: BadmintonComponent },
  { path: 'pingpong', component: PingpongComponent },
  { path: 'ppp', component: PppComponent },
  { path: 'couplebiker', component: CouplebikerComponent },

  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
