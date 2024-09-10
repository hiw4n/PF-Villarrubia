import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserComponent } from './user.component';
import { SharedModule } from '../../../shared/shared.module';
import { MaterialModule } from '../../../shared/material/material.module';

@NgModule({
  declarations: [UserComponent],
  exports: [UserComponent],
  imports: [CommonModule, UserRoutingModule, SharedModule, MaterialModule],
})
export class UserModule {}
