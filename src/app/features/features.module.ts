import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { IndexComponent } from './index/index.component';
import { SharedModule } from '../shared/shared.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { NavModule } from '../shared/component/nav/nav.module';
import { FeaturesComponent } from './features.component';

@NgModule({
  declarations: [IndexComponent, FeaturesComponent],
  exports: [IndexComponent, FeaturesComponent],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    SharedModule,
    NavModule,
    DashboardModule,
  ],
})
export class FeaturesModule {}
