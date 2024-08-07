import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { DashboardComponent } from './dashboard.component';
import { CoursesSpaceModule } from './courses-space/courses-space.module';
import { CoursesSpaceComponent } from './courses-space/courses-space.component';

//  "/dashboard"
const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      /* {
        path: '',
        component: StudentsComponent,
      }, */
      {
        path: '',
        component: CoursesSpaceComponent,
      },
      /* {
        path: '',
        redirectTo: 'courses-space',
      }, */
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
