import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesRoutingModule } from './courses-routing.module';
import { CoursesComponent } from './courses.component';
import { CoursesDialogComponent } from './components/courses-dialog/courses-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { provideNativeDateAdapter } from '@angular/material/core';
import { CourseDetailsComponent } from './pages/course-details/course-details.component';
import { MaterialModule } from '../../../shared/material/material.module';

@NgModule({
  declarations: [
    CoursesComponent,
    CoursesDialogComponent,
    CourseDetailsComponent,
  ],
  exports: [CoursesComponent],
  providers: [provideNativeDateAdapter()],
  imports: [CommonModule, CoursesRoutingModule, ReactiveFormsModule],
})
export class CoursesModule {}
