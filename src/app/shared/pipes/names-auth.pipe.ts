import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'namesAuth',
})
export class NamesAuthPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }
}
