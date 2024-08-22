import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnrollmentsRoutingModule } from './enrollments-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { EnrollmentsEffects } from './store/enrollments.effects';
import { StoreModule } from '@ngrx/store';
import { enrollmentsFeature } from './store/enrollments.reducer';
import { MaterialModule } from '../../../shared/material/material.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EnrollmentsRoutingModule,
    MaterialModule,
    StoreModule.forFeature(enrollmentsFeature),
    EffectsModule.forFeature([EnrollmentsEffects]),
  ],
})
export class EnrollmentsModule {}
