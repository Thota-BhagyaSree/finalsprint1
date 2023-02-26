import { TestBed } from '@angular/core/testing';

import { PlantoperationService } from './plantoperation.service';

describe('PlantoperationService', () => {
  let service: PlantoperationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlantoperationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
