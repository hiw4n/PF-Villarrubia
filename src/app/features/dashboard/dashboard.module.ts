import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Material */
import { MaterialModule } from '../../shared/material/material.module';
/* App */
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CoursesModule } from './courses/courses.module';
import { StudentsModule } from './students/students.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CoursesSpaceComponent } from './courses-space/courses-space.component';
import { SharedModule } from '../../shared/shared.module';
import { NavModule } from '../../shared/component/nav/nav.module';

@NgModule({
  declarations: [DashboardComponent, CoursesSpaceComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    /* material */
    SharedModule,
    /* AuthModule, */
    StudentsModule,
    CoursesModule,
    NavModule,
  ],
  exports: [DashboardComponent, SharedModule],
})
export class DashboardModule {}
