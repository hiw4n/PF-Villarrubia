import { Component } from '@angular/core';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
  /* SIDEBAR -------- STAR */
  showFiller = false;
  /* SIDEBAR -------- END */
  constructor(/* private authService: AuthService */) {}

  /* logOut() {
    this.authService.logOut();
  } */
}
