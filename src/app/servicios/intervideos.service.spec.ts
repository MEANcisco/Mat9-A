import { TestBed } from '@angular/core/testing';

import { IntervideosService } from './intervideos.service';

describe('IntervideosService', () => {
  let service: IntervideosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IntervideosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
