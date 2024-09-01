import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { AppComponent } from './app.component';
import { IndexComponent } from './features/index/index.component';

const routes: Routes = [
  /* {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  }, */
  {
    path: '',
    redirectTo: 'features',
    pathMatch: 'full',
  },
  /*   {
    path: 'index',
    component: IndexComponent,
  }, */
  {
    path: 'auth',
    loadChildren: () =>
      import('./features/auth/auth.module').then((r) => r.AuthModule),
  },
  {
    path: 'features',
    loadChildren: () =>
      import('./features/features.module').then((r) => r.FeaturesModule),
  },
  /*  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    canMatch: [AuthGuard],
    loadChildren: () =>
      import('./features/dashboard/dashboard.module').then(
        (r) => r.DashboardModule
      ),
  }, */
  {
    path: '**',
    redirectTo: '/features',
  },
  /*   {
    path: '**',
    redirectTo: '/dashboard',
  }, */
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
