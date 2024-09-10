import { Component, Input } from '@angular/core';
import { AuthService } from '../../../core/services/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
/* import { APP_CONFIG } from '../../../core/injection-tokens'; */

/* @Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
}) */
export class LoginComponent {
  /* @Input() id: string; */
  loginForm: FormGroup;
  /* */
  constructor(
    private authService: AuthService,
    private fb: FormBuilder /* @Inject(APP_CONFIG) private appConfig: any */
  ) {
    this.loginForm = this.fb.group({
      email: ['test@test.com', [Validators.required, Validators.email]],
      password: ['12345', [Validators.required]],
    });
  }

  onSubmit() {}
}
