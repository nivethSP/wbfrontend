import { TestBed } from '@angular/core/testing';

import { WaterbodyfieldreviewerresponseService } from './waterbodyfieldreviewerresponse.service';

describe('WaterbodifieldreviewerresponseService', () => {
  let service: WaterbodyfieldreviewerresponseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaterbodyfieldreviewerresponseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
