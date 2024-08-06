import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
/* ANGULAR COMPONENTS */
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
/* ANGULAR MATERIAL */
import { RegisterComponent } from './register/register.component';
import { AuthService } from '../../core/services/auth.service';
import { MaterialModule } from '../../shared/material/material.module';
@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    /* angular */
    CommonModule,
    ReactiveFormsModule,
    /* components */
    AuthRoutingModule,
    MaterialModule,
  ],
  exports: [LoginComponent],
  providers: [AuthService],
})
export class AuthModule {}
