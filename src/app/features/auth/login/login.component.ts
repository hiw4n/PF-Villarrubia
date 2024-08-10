import { Component, Input } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../../../core/models/user.interface';
/* import { APP_CONFIG } from '../../../core/injection-tokens'; */

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  public loginForm: FormGroup;
  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {
    this.loginForm = this.fb.group({
      email: ['admin@admin', [Validators.required, Validators.email]],
      password: ['admin', [Validators.required]],
    });
  }
  onLogin(): void {
    console.log('login');
    this.authService.login('admin@admin.com', 'admin').subscribe((user) => {
      console.log('user', user);
      this.router.navigate(['/dashboard/courses-space']);
    });
  }
  onSubmit() {}
}
