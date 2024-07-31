import { TestBed } from '@angular/core/testing';

import { WaterBedNatureService } from './waterbednature.service';

describe('WaterBedNatureService', () => {
  let service: WaterBedNatureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaterBedNatureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
