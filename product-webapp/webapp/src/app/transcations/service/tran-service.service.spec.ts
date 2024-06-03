import { TestBed } from '@angular/core/testing';

import { TranServiceService } from './tran-service.service';

describe('TranServiceService', () => {
  let service: TranServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
