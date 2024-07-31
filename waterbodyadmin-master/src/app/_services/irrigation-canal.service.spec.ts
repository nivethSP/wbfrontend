import { TestBed } from '@angular/core/testing';

import { IrrigationCanalService } from './irrigation-canal.service';

describe('IrrigationCanalService', () => {
  let service: IrrigationCanalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IrrigationCanalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
