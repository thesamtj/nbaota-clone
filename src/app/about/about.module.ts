import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { HistoryComponent } from './history/history.component';
import { SuccessiveChairmenComponent } from './successive-chairmen/successive-chairmen.component';
import { SeniorOfficialsComponent } from './senior-officials/senior-officials.component';
import { MaterialModule } from '../material-module';
import { AmehComponent } from './senior-officials/ameh/ameh.component';
import { ChiefJudgeComponent } from './senior-officials/chief-judge/chief-judge.component';
import { AttorneyGeneralComponent } from './senior-officials/attorney-general/attorney-general.component';
import { OjutalayoComponent } from './senior-officials/ojutalayo/ojutalayo.component';
import { AkintayoComponent } from './senior-officials/akintayo/akintayo.component';
import { OwodunniComponent } from './senior-officials/owodunni/owodunni.component';
import { OlugbemiComponent } from './senior-officials/olugbemi/olugbemi.component';
import { DurojaiyeComponent } from './senior-officials/durojaiye/durojaiye.component';
import { OjugbeleComponent } from './senior-officials/ojugbele/ojugbele.component';
import { OluwalekeComponent } from './senior-officials/oluwaleke/oluwaleke.component';
import { OyajimiComponent } from './senior-officials/oyajimi/oyajimi.component';
import { YoungLawyersComponent } from './young-lawyers/young-lawyers.component';

@NgModule({
  declarations: [
    AboutUsComponent,
    HistoryComponent,
    SuccessiveChairmenComponent,
    SeniorOfficialsComponent,
    AmehComponent,
    ChiefJudgeComponent,
    AttorneyGeneralComponent,
    OjutalayoComponent,
    AkintayoComponent,
    OwodunniComponent,
    OlugbemiComponent,
    DurojaiyeComponent,
    OjugbeleComponent,
    OluwalekeComponent,
    OyajimiComponent,
    YoungLawyersComponent,
  ],
  imports: [
    CommonModule,
    AboutRoutingModule,
    MaterialModule
  ],
  exports: []
})
export class AboutModule { }
