import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';
import { User } from '../core/interfaces/user.interface';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrl: './features.component.scss',
})
export class FeaturesComponent {
  constructor(private router: Router, private authService: AuthService) {}
  get user(): User | undefined {
    return this.authService.currentUser;
  }
  /* logOut() {
    this.authService.logOut();
  } */
  onLogout() {
    this.authService.logOut();
    /* this.router.navigate(['/auth/login']); */
    this.router.navigate(['/']);
  }
}
