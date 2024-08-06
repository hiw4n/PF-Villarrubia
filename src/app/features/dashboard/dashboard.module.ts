import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Material */
import { MaterialModule } from '../../shared/material/material.module';
/* App */
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CoursesModule } from './courses/courses.module';
import { StudentsModule } from './students/students.module';
import { SharedModule } from '../../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [DashboardComponent],

  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    /* AuthModule, */
    StudentsModule,
    CoursesModule,
    SharedModule,
    MaterialModule,
  ],
  exports: [DashboardComponent, MaterialModule],
})
export class DashboardModule {}
