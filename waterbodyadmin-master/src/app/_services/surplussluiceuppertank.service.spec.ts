import { TestBed } from '@angular/core/testing';

import { SurplussluiceUppertankService } from './surplussluiceuppertank.service';

describe('SurplussluiceUppertankService', () => {
  let service: SurplussluiceUppertankService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SurplussluiceUppertankService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
