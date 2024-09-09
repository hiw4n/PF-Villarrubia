import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsSpaceRoutingModule } from './students-space-routing.module';
import { EffectsModule } from '@ngrx/effects';
import { StudentEffects } from './store/student.effects';
import { StoreModule } from '@ngrx/store';
import { studentFeature } from './store/student.reducer';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    StudentsSpaceRoutingModule,
    EffectsModule.forRoot([StudentEffects]),
    // EffectsModule.forFeature([StudentEffects]),
    StoreModule.forFeature(studentFeature),
  ],
})
export class StudentsSpaceModule {}
