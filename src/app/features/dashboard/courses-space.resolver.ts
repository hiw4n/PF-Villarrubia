import { ResolveFn } from '@angular/router';

export const coursesSpaceResolver: ResolveFn<boolean> = (route, state) => {
  return true;
};
