import { TestBed } from '@angular/core/testing';

import { ElderApiService } from './elder-api.service';

describe('ElderApiService', () => {
  let service: ElderApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElderApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
