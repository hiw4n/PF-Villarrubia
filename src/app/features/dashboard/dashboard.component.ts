import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { User } from '../../core/interfaces/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  /* SIDEBAR -------- STAR */
  showFiller = false;
  /* SIDEBAR -------- END */
  constructor(/* private authService: AuthService, */ private router: Router) {}

  /*   get user(): User | undefined {
    return this.authService.currentUser;
  } */
  onLogout() {
    /* this.authService.logOut(); */
    this.router.navigate(['/auth/login']);
  }
}
