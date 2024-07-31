import { TestBed } from '@angular/core/testing';

import { Source1supplyService } from './source1supply.service';

describe('Source1supplyService', () => {
  let service: Source1supplyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Source1supplyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
