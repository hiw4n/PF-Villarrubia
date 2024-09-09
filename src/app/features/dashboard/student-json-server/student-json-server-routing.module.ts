import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewComponent } from './pages/new/new.component';
import { SearchComponent } from '../courses-space/pages/search/search.component';
import { ListComponent } from './pages/list/list.component';
import { DetailComponent } from './pages/detail/detail.component';
import { StudentJsonServerComponent } from './student-json-server.component';

const routes: Routes = [
  {
    path: '',
    component: StudentJsonServerComponent,
    children: [
      { path: 'new', component: NewComponent },
      { path: 'search', component: SearchComponent },
      { path: 'edit/:id', component: NewComponent },
      { path: 'list', component: ListComponent },
      { path: 'detail/:id', component: DetailComponent },
      { path: '**', redirectTo: 'list' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentJsonServerRoutingModule {}
