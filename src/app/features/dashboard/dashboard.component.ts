import { Component, ViewChild } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';
import { User } from '../../core/models/user.interface';
import { Router } from '@angular/router';
import { MatSidenav, MatSidenavModule } from '@angular/material/sidenav';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  /* SIDEBAR -------- STAR */
  showFiller = false;
  /* SIDEBAR -------- END */
  constructor(private authService: AuthService, private router: Router) {}

  get user(): User | undefined {
    return this.authService.currentUser;
  }
  /* logOut() {
    this.authService.logOut();
  } */
  onLogout() {
    this.authService.logOut();
    this.router.navigate(['/auth/login']);
  }
}
