import { TestBed, inject } from '@angular/core/testing';

import { AlmanacService } from './almanac.service';

describe('AlmanacService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AlmanacService]
    });
  });

  it('should be created', inject([AlmanacService], (service: AlmanacService) => {
    expect(service).toBeTruthy();
  }));
});
