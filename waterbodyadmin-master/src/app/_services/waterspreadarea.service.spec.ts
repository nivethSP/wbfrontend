import { TestBed } from '@angular/core/testing';

import { WaterspreadareaService } from './waterspreadarea.service';

describe('WaterspreadareaService', () => {
  let service: WaterspreadareaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaterspreadareaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
