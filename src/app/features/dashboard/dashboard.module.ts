import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Material */
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';

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
    /* ANGULAR MATERIAL */
    MatSidenavModule /* sidebar angular material */,
    MatToolbarModule /* tollbar for sidebar */,
    MatIconModule /* iconos for sidebar */,
    MatButtonModule /* Buttons */,
    MatListModule,
    MatSelectModule,
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
