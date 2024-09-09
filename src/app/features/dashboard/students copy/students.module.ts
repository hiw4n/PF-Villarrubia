import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentsComponent } from './students.component';
import { ReactiveFormsModule } from '@angular/forms';

import { StudentsDialogComponent } from './components/students-dialog/students-dialog.component';
import { provideNativeDateAdapter } from '@angular/material/core';
import { StudentDetailsComponent } from './pages/student-details/student-details.component';
import { ListComponent } from './pages/list/list.component';
import { MaterialModule } from '../../../shared/material/material.module';
import { SharedModule } from '../../../shared/shared.module';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    StudentsComponent,
    StudentsDialogComponent,
    StudentDetailsComponent,
    ListComponent,
  ],
  exports: [StudentsComponent],
  providers: [provideNativeDateAdapter()],
  imports: [
    CommonModule,
    StudentsRoutingModule,
    ReactiveFormsModule,
    SharedModule,
    MatTableModule,
  ],
})
export class StudentsModule {}
