import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material-module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { DirectivesModule } from './directives/directives.module';

import { DataService } from './service/data.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BranchOfficersComponent } from './branch/branch-officers/branch-officers.component';
import { NewsComponent } from './news/news.component';
import { MembersComponent } from './members/members.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HeaderComponent } from './navigation/header/header.component';
import { NavtabsComponent } from './navigation/navtabs/navtabs.component';
import { HeadingComponent } from './home/heading/heading.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { ContactDialogComponent } from './contact-dialog/contact-dialog.component';
import { HeadingTwoComponent } from './home/heading-two/heading-two.component';
import { HeadingThreeComponent } from './home/heading-three/heading-three.component';
import { HttpClientModule } from '@angular/common/http';
import { InuagralSpeechComponent } from './branch/inuagral-speech/inuagral-speech.component';
import { ChairmanProfileComponent } from './branch/chairman-profile/chairman-profile.component';
import { MoreDetailsComponent } from './members/more-details/more-details.component';
import { FooterComponent } from './home/footer/footer.component';
import { ViceChairmanProfileComponent } from './branch/vice-chairman-profile/vice-chairman-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BranchOfficersComponent,
    NewsComponent,
    MembersComponent,
    ContactUsComponent,
    HeaderComponent,
    NavtabsComponent,
    HeadingComponent,
    SidenavComponent,
    ContactDialogComponent,
    HeadingTwoComponent,
    HeadingThreeComponent,
    InuagralSpeechComponent,
    ChairmanProfileComponent,
    MoreDetailsComponent,
    FooterComponent,
    ViceChairmanProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    DirectivesModule,
    BrowserAnimationsModule,
  ],
  providers: [DataService],
  entryComponents: [ContactDialogComponent, MoreDetailsComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
