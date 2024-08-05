import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { DashboardComponent } from './dashboard.component';

//  "/dashboard"
const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: '',
        component: StudentsComponent,
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
