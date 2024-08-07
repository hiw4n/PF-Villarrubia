import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesSpaceComponent } from './courses-space.component';
import { ListComponent } from './pages/list/list.component';
// courses
const routes: Routes = [
  {
    path: '',
    component: ListComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesSpaceRoutingModule {}
