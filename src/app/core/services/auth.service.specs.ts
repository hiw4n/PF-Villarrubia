import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthHService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  /*   it('logout deleted', ()=>{
    const expyLocalStorage = spyOn()
  }) */
});
