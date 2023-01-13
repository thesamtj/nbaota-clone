import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BranchOfficersComponent } from './branch/branch-officers/branch-officers.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { MembersComponent } from './members/members.component';
import { NewsComponent } from './news/news.component';
import { ChairmanProfileComponent } from './branch/chairman-profile/chairman-profile.component';
import {ViceChairmanProfileComponent} from './branch/vice-chairman-profile/vice-chairman-profile.component';
import { InuagralSpeechComponent } from './branch/inuagral-speech/inuagral-speech.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'about-us',
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutModule),
  },
  { path: 'branch-officers', component: BranchOfficersComponent },
  { path: 'contact-us', component: ContactUsComponent },
  { path: 'members', component: MembersComponent },
  { path: 'news', component: NewsComponent },
  { path: 'chairman', component: ChairmanProfileComponent },
  { path: 'vice-chairman', component: ViceChairmanProfileComponent },
  { path: 'inaugural-speech', component: InuagralSpeechComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: '**', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
