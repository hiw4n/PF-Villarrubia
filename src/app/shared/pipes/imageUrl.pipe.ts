import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imageUrl',
})
export class imageUrlPipe implements PipeTransform {
  transform(image: string): string {
    if (!image) {
      return 'assets/images/no-image.png';
    }
    return 'assets/images/' + image;
  }
}
