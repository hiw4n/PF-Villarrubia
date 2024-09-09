import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsSpaceComponent } from './students-space.component';

const routes: Routes = [
  {
    path: '',
    component: StudentsSpaceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StudentsSpaceRoutingModule {}
