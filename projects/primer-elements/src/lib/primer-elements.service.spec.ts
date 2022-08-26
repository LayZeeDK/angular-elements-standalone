import { TestBed } from '@angular/core/testing';

import { PrimerElementsService } from './primer-elements.service';

describe('PrimerElementsService', () => {
  let service: PrimerElementsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrimerElementsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
