import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appResaltado]',
})
export class ResaltadoDirective {
  constructor(private eRef: ElementRef) {
    this.eRef.nativeElement.style.fontSize = '20px';
    this.eRef.nativeElement.style.fontWeight = '700';
  }
}
