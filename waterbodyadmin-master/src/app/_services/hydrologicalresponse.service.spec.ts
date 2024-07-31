import { TestBed } from '@angular/core/testing';

import { HydrologicalresponseService } from './hydrologicalresponse.service';

describe('HydrologicalresponseService', () => {
  let service: HydrologicalresponseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HydrologicalresponseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
