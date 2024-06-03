import { HttpClientModule } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';

import { UpdateDetailsService } from './update-details.service';

describe('UpdateDetailsService', () => {
  let service: UpdateDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientModule, ],
    });
    service = TestBed.inject(UpdateDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
