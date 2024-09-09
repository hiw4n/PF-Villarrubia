import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentJsonServerRoutingModule } from './student-json-server-routing.module';
import { SharedModule } from '../../../shared/shared.module';
import { ListComponent } from './pages/list/list.component';
import { EditComponent } from './pages/edit/edit.component';
import { NewComponent } from './pages/new/new.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { ShearchComponent } from './pages/shearch/shearch.component';
import { DetailComponent } from './pages/detail/detail.component';

@NgModule({
  declarations: [
    ListComponent,
    EditComponent,
    NewComponent,
    LayoutComponent,
    ShearchComponent,
    DetailComponent
  ],
  imports: [CommonModule, StudentJsonServerRoutingModule, SharedModule],
})
export class StudentJsonServerModule {}
