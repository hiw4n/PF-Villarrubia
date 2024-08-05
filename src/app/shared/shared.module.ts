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
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    NamesAuthPipe,
    ResaltadoDirective,
    StudenNameLastnamePipe,
    ResaltadoDirective,
    NavComponent,
    SidebarComponent,
    LoadingComponent,
  ],
  exports: [
    NamesAuthPipe,
    ResaltadoDirective,
    StudenNameLastnamePipe,
    ResaltadoDirective,
    NavComponent,
    SidebarComponent,
    LoadingComponent,
    MaterialModule,
  ],
  imports: [
    CommonModule,
    /* ANGULAR MATERIAL */
    MaterialModule,
  ],
})
export class SharedModule {}
