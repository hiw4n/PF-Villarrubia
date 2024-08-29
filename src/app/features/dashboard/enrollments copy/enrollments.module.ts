import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnrollmentsRoutingModule } from './enrollments-routing.module';

import { MaterialModule } from '../../../shared/material/material.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { enrollmentsFeature } from './store/enrollments.reducer';
import { EnrollmentsEffects } from './store/enrollments.effects';
import { EnrollmentsComponent } from './enrollments.component';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [EnrollmentsComponent],
  exports: [EnrollmentsComponent],
  imports: [
    CommonModule,
    SharedModule,
    EnrollmentsRoutingModule,
    MaterialModule,
    StoreModule.forFeature(enrollmentsFeature),
    EffectsModule.forFeature([EnrollmentsEffects]),
  ],
})
export class EnrollmentsModule {}
