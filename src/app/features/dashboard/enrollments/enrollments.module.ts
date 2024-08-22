import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnrollmentsRoutingModule } from './enrollments-routing.module';
import { StoreModule } from '@ngrx/store';

import { MaterialModule } from '../../../shared/material/material.module';
import { enrollmentsFeature } from './store/enrollments.reducer';
import { EffectsModule } from '@ngrx/effects';
import { EnrollmentsEffects } from './store/enrollments.effects';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EnrollmentsRoutingModule,
    MaterialModule,
    StoreModule.forFeature(enrollmentsFeature),
    /* EffectsModule.forFeature([EnrollmentsEffects]), */
  ],
})
export class EnrollmentsModule {}
