import { TestBed } from '@angular/core/testing';

import { UppertanksluiceService } from './uppertanksluice.service';

describe('UppertanksluiceService', () => {
  let service: UppertanksluiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UppertanksluiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
