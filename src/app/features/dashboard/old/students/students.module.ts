import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StudentsDialogComponent } from './components/students-dialog/students-dialog.component';
import { provideNativeDateAdapter } from '@angular/material/core';
// import { StudenNameLastnamePipe } from '../../../shared/pipes/studen-name-lastname.pipe';
import { StudentDetailsComponent } from './pages/student-details/student-details.component';
import { ListComponent } from './pages/list/list.component';
import { SharedModule } from '../../../../shared/shared.module';

@NgModule({
  declarations: [
    // StudentsComponent,
    StudentsDialogComponent,
    StudentDetailsComponent,
    ListComponent,
  ],
  exports: [],
  providers: [provideNativeDateAdapter()],
  imports: [
    CommonModule,
    StudentsRoutingModule,

    ReactiveFormsModule,
    FormsModule,

    SharedModule,
  ],
})
export class StudentsModule {}
