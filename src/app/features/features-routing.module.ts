import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../core/guards/auth.guard';
import { FeaturesComponent } from './features.component';
import { IndexComponent } from './index/index.component';

const routes: Routes = [
  {
    path: '',
    component: FeaturesComponent,
    children: [
      {
        path: '',
        component: IndexComponent,
      },
      {
        path: 'index',
        component: IndexComponent,
      },
      {
        path: 'dashboard',
        canActivate: [AuthGuard],
        canMatch: [AuthGuard],
        loadChildren: () =>
          import('./dashboard/dashboard.module').then((r) => r.DashboardModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FeaturesRoutingModule {}
