import { TestBed } from '@angular/core/testing';

import { CriticalAlertsService } from './critical-alerts.service';

describe('CriticalAlertsService', () => {
  let service: CriticalAlertsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CriticalAlertsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
