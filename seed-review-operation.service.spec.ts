import { TestBed } from '@angular/core/testing';

import { SeedReviewOperationService } from './seed-review-operation.service';

describe('SeedReviewOperationService', () => {
  let service: SeedReviewOperationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SeedReviewOperationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
