import { TestBed } from '@angular/core/testing';

import { SluiceresponseService } from './sluiceresponse.service';

describe('SluiceresponseService', () => {
  let service: SluiceresponseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SluiceresponseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
