import { TestBed, inject } from '@angular/core/testing';

import { CustomersDataService } from './customers-data.service';

describe('CustomersDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomersDataService]
    });
  });

  it('should ...', inject([CustomersDataService], (service: CustomersDataService) => {
    expect(service).toBeTruthy();
  }));
});
