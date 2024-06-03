import { TestBed } from '@angular/core/testing';

import { RegisterProductGuard } from './register-product.guard';

describe('RegisterProductGuard', () => {
  let guard: RegisterProductGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(RegisterProductGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
