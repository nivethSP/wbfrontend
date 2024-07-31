import { TestBed } from '@angular/core/testing';

import { RiverstreamService } from './riverstream.service';

describe('RiverstreamService', () => {
  let service: RiverstreamService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RiverstreamService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
