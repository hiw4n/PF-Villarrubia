import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NamesAuthPipe } from './pipes/names-auth.pipe';
import { ResaltadoDirective } from './directives/resaltado.directive';
import { StudenNameLastnamePipe } from './pipes/studen-name-lastname.pipe';
import { NavComponent } from './component/nav/nav.component';
/* Material */
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import { MatSelectModule } from '@angular/material/select';
@NgModule({
  declarations: [
    NamesAuthPipe,
    ResaltadoDirective,
    StudenNameLastnamePipe,
    ResaltadoDirective,
    NavComponent,
  ],
  exports: [
    NamesAuthPipe,
    ResaltadoDirective,
    StudenNameLastnamePipe,
    ResaltadoDirective,
    NavComponent,
  ],
  imports: [
    CommonModule,
    /* ANGULAR MATERIAL */
    MatSidenavModule /* sidebar angular material */,
    MatToolbarModule /* tollbar for sidebar */,
    MatIconModule /* iconos for sidebar */,
    MatListModule,
    MatSelectModule,
  ],
})
export class SharedModule {}
