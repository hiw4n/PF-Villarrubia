import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
/* ANGULAR COMPONENTS */
import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from './login/login.component';
/* ANGULAR MATERIAL */
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RegisterComponent } from './register/register.component';
import { AuthService } from '../../core/services/auth.service';
@NgModule({
  declarations: [LoginComponent, RegisterComponent],
  imports: [
    /* angular */
    CommonModule,
    ReactiveFormsModule,
    /* components */
    AuthRoutingModule,
    /* Material */
    MatCardModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
  ],
  exports: [LoginComponent],
  providers: [AuthService],
})
export class AuthModule {}
