import { TestBed } from '@angular/core/testing';

import { UiManipulationService } from './ui-manipulation.service';

describe('UiManipulationService', () => {
  let service: UiManipulationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UiManipulationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
