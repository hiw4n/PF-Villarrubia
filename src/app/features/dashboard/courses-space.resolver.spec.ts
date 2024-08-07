import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { coursesSpaceResolver } from './courses-space.resolver';

describe('coursesSpaceResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => coursesSpaceResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
