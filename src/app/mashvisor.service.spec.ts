import { TestBed } from '@angular/core/testing';

import { MashvisorService } from './mashvisor.service';

describe('MashvisorService', () => {
  let service: MashvisorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MashvisorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
