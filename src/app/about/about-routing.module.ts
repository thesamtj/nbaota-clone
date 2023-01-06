import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { YoungLawyersComponent } from './young-lawyers/young-lawyers.component';
import { AmehComponent } from './senior-officials/ameh/ameh.component';
import { OjutalayoComponent } from './senior-officials/ojutalayo/ojutalayo.component';
import { OlugbemiComponent } from './senior-officials/olugbemi/olugbemi.component';
import { OjugbeleComponent } from './senior-officials/ojugbele/ojugbele.component';
import { OluwalekeComponent } from './senior-officials/oluwaleke/oluwaleke.component';
import { AkintayoComponent } from './senior-officials/akintayo/akintayo.component';
import { OyajimiComponent } from './senior-officials/oyajimi/oyajimi.component';
import { HistoryComponent } from './history/history.component';
import { SuccessiveChairmenComponent } from './successive-chairmen/successive-chairmen.component';
import { SeniorOfficialsComponent } from './senior-officials/senior-officials.component';

const routes: Routes = [
  {
    path: '',
    component: AboutUsComponent
  },
  {
    path: 'early-history',
    component: HistoryComponent
  },
  {
    path: 'successive-chairmen',
    component: SuccessiveChairmenComponent
  },
  {
    path: 'honorary-recognitions',
    component: SeniorOfficialsComponent
  },
  {
    path: 'young-lawyers',
    component: YoungLawyersComponent
  },
  {
    path: 'ameh',
    component: AmehComponent
  },
  {
    path: 'ojutalayo',
    component: OjutalayoComponent
  },
  {
    path: 'olugbemi',
    component: OlugbemiComponent
  },
  {
    path: 'ojugbele',
    component: OjugbeleComponent
  },
  {
    path: 'oluwaleke',
    component: OluwalekeComponent
  },
  {
    path: 'akintayo',
    component: AkintayoComponent
  },
  {
    path: 'oyajinmi',
    component: OyajimiComponent
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
