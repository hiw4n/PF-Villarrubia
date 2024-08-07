import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './pages/list/list.component';
import { DetailComponent } from './pages/detail/detail.component';
import { NewComponent } from './pages/new/new.component';
import { EditComponent } from './pages/edit/edit.component';
import { SearchComponent } from './pages/search/search.component';
import { CoursesSpaceComponent } from './courses-space.component';
// courses
const routes: Routes = [
  {
    path: '',
    component: CoursesSpaceComponent,
    children: [
      {
        path: 'new',
        component: NewComponent,
      },
      {
        path: 'edit/:id',
        component: EditComponent,
      },
      {
        path: ':id',
        component: DetailComponent,
      },
      {
        path: 'search',
        component: SearchComponent,
      },
      {
        path: '**',
        component: ListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CoursesSpaceRoutingModule {}
