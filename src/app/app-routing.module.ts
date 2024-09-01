import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'features',
    pathMatch: 'full',
  },
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
  {
    path: '**',
    redirectTo: '/features',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
