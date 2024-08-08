import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { CoursesSpaceRoutingModule } from './courses-space-routing.module';
import { CardComponent } from './components/card/card.component';
import { ListComponent } from './pages/list/list.component';
import { MaterialModule } from '../../../shared/material/material.module';
import { SharedModule } from '../../../shared/shared.module';
import { DetailComponent } from './pages/detail/detail.component';
import { EditComponent } from './pages/edit/edit.component';
import { SearchComponent } from './pages/search/search.component';
import { NewComponent } from './pages/new/new.component';

@NgModule({
  declarations: [
    CardComponent,
    ListComponent,
    DetailComponent,
    EditComponent,
    SearchComponent,
    NewComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CoursesSpaceRoutingModule,
    MaterialModule,
    SharedModule,
  ],
})
export class CoursesSpaceModule {}
