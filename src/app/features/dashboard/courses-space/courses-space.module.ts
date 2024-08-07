import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesSpaceRoutingModule } from './courses-space-routing.module';
import { CardComponent } from './components/card/card.component';
import { ListComponent } from './pages/list/list.component';
import { MaterialModule } from '../../../shared/material/material.module';
import { SharedModule } from '../../../shared/shared.module';

@NgModule({
  declarations: [CardComponent, ListComponent],
  imports: [
    CommonModule,
    CoursesSpaceRoutingModule,
    MaterialModule,
    SharedModule,
  ],
})
export class CoursesSpaceModule {}
