import { TestBed } from '@angular/core/testing';

import { PledgesService } from './pledges.service';

describe('PledgesService', () => {
  let service: PledgesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PledgesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
