import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.module').then((r) => r.AuthModule),
  },
  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    canMatch: [AuthGuard],
    loadChildren: () =>
      import('./features/dashboard/dashboard.module').then(
        (r) => r.DashboardModule
      ),
  },
  {
    path: '**',
    redirectTo: '/dashboard',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
