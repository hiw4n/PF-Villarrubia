import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NamesAuthPipe } from './pipes/names-auth.pipe';
import { ResaltadoDirective } from './directives/resaltado.directive';
import { StudenNameLastnamePipe } from './pipes/studen-name-lastname.pipe';

@NgModule({
  declarations: [
    NamesAuthPipe,
    ResaltadoDirective,
    StudenNameLastnamePipe,
    ResaltadoDirective,
  ],
  exports: [
    NamesAuthPipe,
    ResaltadoDirective,
    StudenNameLastnamePipe,
    ResaltadoDirective,
  ],
  imports: [CommonModule],
})
export class SharedModule {}
