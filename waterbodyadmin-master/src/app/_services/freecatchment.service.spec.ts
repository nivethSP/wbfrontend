import { TestBed } from '@angular/core/testing';

import { FreecatchmentService } from './freecatchment.service';

describe('FreecatchmentService', () => {
  let service: FreecatchmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FreecatchmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
