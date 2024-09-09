import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* App */
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { CoursesModule } from './courses/courses.module';
import { StudentsModule } from './students/students.module';
import { ReactiveFormsModule } from '@angular/forms';
import { CoursesSpaceComponent } from './courses-space/courses-space.component';
import { SharedModule } from '../../shared/shared.module';
import { NavModule } from '../../shared/component/nav/nav.module';
import { EnrollmentsModule } from './enrollments/enrollments.module';
import { TeachersComponent } from './teachers/teachers.component';
import { TeachersModule } from './teachers/teachers.module';
import { StudentJsonServerComponent } from './student-json-server/student-json-server.component';

@NgModule({
  declarations: [DashboardComponent, CoursesSpaceComponent, TeachersComponent, StudentJsonServerComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ReactiveFormsModule,
    /* material */
    SharedModule,
    /* AuthModule, */
    TeachersModule,
    StudentsModule,
    CoursesModule,
    NavModule,
    EnrollmentsModule,
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
