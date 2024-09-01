import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

//  "/dashboard"
const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'enrollments',
        loadChildren: () =>
          import('./enrollments/enrollments.module').then(
            (m) => m.EnrollmentsModule
          ),
      },
      {
        path: 'courses-space',
        loadChildren: () =>
          import('./courses-space/courses-space.module').then(
            (r) => r.CoursesSpaceModule
          ),
      },
      {
        path: 'courses',
        loadChildren: () =>
          import('./courses/courses.module').then((r) => r.CoursesModule),
      },
      {
        path: 'students',
        loadChildren: () =>
          import('./students/students.module').then((r) => r.StudentsModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
