import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { enrollmentsFeature } from './store/enrollments.reducer';
import { EnrollmentsEffects } from './store/enrollments.effects';
import { EnrollmentsComponent } from './enrollments.component';
import { SharedModule } from '../../../shared/shared.module';
import { EnrollmentsRoutingModule } from './enrollments-routing.module';

@NgModule({
  declarations: [EnrollmentsComponent],
  imports: [
    CommonModule,
    SharedModule,
    EnrollmentsRoutingModule,
    StoreModule.forFeature(enrollmentsFeature),
    /* EffectsModule.forFeature([EnrollmentsEffects]), */
  ],
  exports: [EnrollmentsComponent],
})
export class EnrollmentsModule {}
