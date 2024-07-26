import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//Components
import { NavComponent } from './component/nav/nav.component';
import { LoadingComponent } from './component/loading/loading.component';
//Pipes
import { NamesAuthPipe } from './pipes/names-auth.pipe';
import { StudenNameLastnamePipe } from './pipes/studen-name-lastname.pipe';
//Directives
import { ResaltadoDirective } from './directives/resaltado.directive';
/* Material */
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    NamesAuthPipe,
    ResaltadoDirective,
    StudenNameLastnamePipe,
    ResaltadoDirective,
    NavComponent,
    LoadingComponent,
  ],
  exports: [
    NamesAuthPipe,
    ResaltadoDirective,
    StudenNameLastnamePipe,
    ResaltadoDirective,
    NavComponent,
    LoadingComponent,
  ],
  imports: [
    CommonModule,
    /* ANGULAR MATERIAL */
    MatSidenavModule /* sidebar angular material */,
    MatToolbarModule /* tollbar for sidebar */,
    MatIconModule /* iconos for sidebar */,
    MatListModule,
    MatSelectModule,
    MatProgressSpinnerModule,
  ],
})
export class SharedModule {}
