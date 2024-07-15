import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NamesAuthPipe } from './pipes/names-auth.pipe';
import { ResaltadoDirective } from './directives/resaltado.directive';

@NgModule({
  declarations: [NamesAuthPipe, ResaltadoDirective],
  exports: [NamesAuthPipe, ResaltadoDirective],
  imports: [CommonModule],
})
export class SharedModule {}
