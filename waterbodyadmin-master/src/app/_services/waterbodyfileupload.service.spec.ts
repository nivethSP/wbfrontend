import { TestBed } from '@angular/core/testing';

import { WaterbodyFileUploadService } from './waterbody-file-upload.service';

describe('WaterbodyFileUploadService', () => {
  let service: WaterbodyFileUploadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WaterbodyFileUploadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
