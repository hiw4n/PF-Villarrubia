import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Material */
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

/* App */
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CoursesModule } from './courses/courses.module';
import { StudentsModule } from './students/students.module';
/* import { AuthModule } from '../auth/auth.module'; */

@NgModule({
  declarations: [DashboardComponent, SidebarComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    /* AuthModule, */
    StudentsModule,
    CoursesModule,
    /* ANGULAR MATERIAL */
    MatSidenavModule /* sidebar angular material */,
    MatToolbarModule /* tollbar for sidebar */,
    MatIconModule /* iconos for sidebar */,
    MatButtonModule /* Buttons */,
    MatListModule,
  ],
  exports: [DashboardComponent],
})
export class DashboardModule {}
