import { TestBed } from '@angular/core/testing';

import { PrimerAngularService } from './primer-angular.service';

describe('PrimerAngularService', () => {
  let service: PrimerAngularService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrimerAngularService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
