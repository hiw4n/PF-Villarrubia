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
import { imageUrlPipe } from './pipes/imageUrl.pipe';

@NgModule({
  declarations: [
    ResaltadoDirective,
    NavComponent,
    SidebarComponent,
    LoadingComponent,
    /* Pipe */
    NamesAuthPipe,
    StudenNameLastnamePipe,
    imageUrlPipe,
  ],
  exports: [
    ResaltadoDirective,
    NavComponent,
    SidebarComponent,
    LoadingComponent,
    /* ANGULAR MATERIAL */
    MaterialModule,
    /* Pipe */
    NamesAuthPipe,
    StudenNameLastnamePipe,
    imageUrlPipe,
  ],
  imports: [
    CommonModule,
    /* ANGULAR MATERIAL */
    MaterialModule,
  ],
})
export class SharedModule {}
