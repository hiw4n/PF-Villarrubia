import { Component, Input } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
/* import { APP_CONFIG } from '../../../core/injection-tokens'; */

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(
    private authService: AuthService,
    private router: Router,
    private fb: FormBuilder
  ) {}
  onLogin(): void {
    console.log('login');
    this.authService.login('admin', 'admin').subscribe((user) => {
      this.router.navigate(['/dashboard/courses-space']);
    });
  }
}
