import { TestBed } from '@angular/core/testing';

import { WaterbundresponseService } from './waterbundresponse.service';

describe('WaterbundresponseService', () => {
  let service: WaterbundresponseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaterbundresponseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
