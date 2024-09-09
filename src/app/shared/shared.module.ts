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
import { NavLateralComponent } from './component/nav/nav-lateral/nav-lateral.component';
import { NavTopComponent } from './component/nav/nav-top/nav-top.component';
import { NavModule } from './component/nav/nav.module';
import { CardComponent } from './component/card/card.component';

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
    CardComponent,
  ],
  exports: [
    ResaltadoDirective,
    NavComponent,
    SidebarComponent,
    LoadingComponent,
    CardComponent,
    /* ANGULAR MATERIAL */
    MaterialModule,
    NavTopComponent,
    NavLateralComponent,
    /* Pipe */
    NamesAuthPipe,
    StudenNameLastnamePipe,
    imageUrlPipe,
  ],
  imports: [
    CommonModule,
    NavModule,
    /* ANGULAR MATERIAL */
    MaterialModule,
  ],
})
export class SharedModule {}
