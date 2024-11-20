import {EmergencyNumbersApiService} from "./emergency-numbers-api.service";
import {TestBed} from "@angular/core/testing";


describe('EmergencyNumbersApiService', () => {
  let service: EmergencyNumbersApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmergencyNumbersApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
