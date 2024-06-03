import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { RegisterProductService } from './register-product.service';

describe('RegisterProductService', () => {
  let service: RegisterProductService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
    });
    service = TestBed.inject(RegisterProductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
