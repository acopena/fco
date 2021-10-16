import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './sites/about/about.component';
import { HomeComponent } from './sites/home/home.component';

import { RecreationhomeComponent } from './sites/recreation/recreationhome/recreationhome.component';
import { IntegrationComponent } from './sites/integration/integration.component';
import { EventshomeComponent } from './sites/events/eventshome/eventshome.component';

import { SportshomeComponent } from './sites/sports/sportshome/sportshome.component';

import { BasketballComponent } from './sites/sports/basketball/basketball.component';
import { TennisComponent } from './sites/sports/tennis/tennis.component';
import { PickelballComponent } from './sites/sports/pickelball/pickelball.component';
import { BadmintonComponent } from './sites/sports/badminton/badminton.component';
import { PingpongComponent } from './sites/sports/pingpong/pingpong.component';
import { BayshorebasketballComponent } from './sites/sports/bayshorebasketball/bayshorebasketball.component';
import { OttawatitansComponent } from './sites/sports/ottawatitans/ottawatitans.component';

import { PppComponent } from './sites/recreation/ppp/ppp.component';
import { CouplebikerComponent } from './sites/recreation/couplebiker/couplebiker.component';
import { GolfComponent } from './sites/recreation/golf/golf.component';

import { ReligionhomeComponent } from './sites/religion/religionhome/religionhome.component';
import { BusinesshomeComponent } from './sites/business/businesshome/businesshome.component';

// Admin
import { UserlistComponent } from './admin/userlist/userlist.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { GrouplistComponent } from './admin/grouplist/grouplist.component';
import { ContentComponent } from './admin/content/content.component';
import { ContentlistComponent } from './admin/contentlist/contentlist.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },

  { path: 'recreation', component: RecreationhomeComponent },
  { path: 'integration', component: IntegrationComponent },
  { path: 'events', component: EventshomeComponent },
  { path: 'aboutus', component: AboutComponent },

  { path: 'sports', component: SportshomeComponent },
  { path: 'basketball', component: BasketballComponent },
  { path: 'tennis', component: TennisComponent },
  { path: 'pickelball', component: PickelballComponent },
  { path: 'badminton', component: BadmintonComponent },
  { path: 'pingpong', component: PingpongComponent },
  { path: 'bayshorebasketball', component: BayshorebasketballComponent },
  { path: 'ottawatitans', component: OttawatitansComponent },

  { path: 'ppp', component: PppComponent },
  { path: 'couplebiker', component: CouplebikerComponent },
  { path: 'golf', component: GolfComponent },

  { path: 'religion', component: ReligionhomeComponent },
  { path: 'business', component: BusinesshomeComponent },
  // admin
  { path: 'userlist', component: UserlistComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'grouplist', component: GrouplistComponent },
  { path: 'content/:id', component: ContentComponent },
  { path: 'contentlist', component: ContentlistComponent },

  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
