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
      {
        path: 'students-jsonServer',
        loadChildren: () =>
          import('./student-json-server/student-json-server.module').then(
            (r) => r.StudentJsonServerModule
          ),
      },
      {
        path: 'students-space',
        loadChildren: () =>
          import('./students-space/students-space.module').then(
            (r) => r.StudentsSpaceModule
          ),
      },
      {
        path: 'teachers',
        loadChildren: () =>
          import('./teachers/teachers.module').then((r) => r.TeachersModule),
      },
      {
        path: 'user',
        loadChildren: () =>
          import('./user/user.module').then((r) => r.UserModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule {}
