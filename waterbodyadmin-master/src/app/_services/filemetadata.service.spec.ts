import { TestBed } from '@angular/core/testing';

import { FilemetadataService } from './filemetadata.service';

describe('FilemetadataService', () => {
  let service: FilemetadataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FilemetadataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
