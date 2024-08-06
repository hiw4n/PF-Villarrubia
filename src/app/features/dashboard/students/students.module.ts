import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { ReactiveFormsModule } from '@angular/forms';

import { StudentsDialogComponent } from './components/students-dialog/students-dialog.component';
import { provideNativeDateAdapter } from '@angular/material/core';
import { SharedModule } from '../../../shared/shared.module';
import { StudenNameLastnamePipe } from '../../../shared/pipes/studen-name-lastname.pipe';
import { StudentDetailsComponent } from './pages/student-details/student-details.component';

@NgModule({
  declarations: [
    StudentsComponent,
    StudentsDialogComponent,
    StudentDetailsComponent,
  ],
  exports: [StudentsComponent],
  providers: [provideNativeDateAdapter()],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class StudentsModule {}
