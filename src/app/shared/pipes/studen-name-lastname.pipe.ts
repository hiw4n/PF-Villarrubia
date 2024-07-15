import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'studenNameLastname',
})
export class StudenNameLastnamePipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    let nameAll = `${args}, ${value}`;
    console.log('values', value);
    console.log('args', args);
    return nameAll;
  }
}
