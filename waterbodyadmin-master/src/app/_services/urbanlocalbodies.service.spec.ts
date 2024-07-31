import { TestBed } from '@angular/core/testing';

import { UrbanlocalbodiesService } from './urbanlocalbodies.service';

describe('UrbanlocalbodiesService', () => {
  let service: UrbanlocalbodiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UrbanlocalbodiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
