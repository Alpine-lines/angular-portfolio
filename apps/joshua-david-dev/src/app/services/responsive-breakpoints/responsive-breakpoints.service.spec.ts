import { TestBed } from '@angular/core/testing';

import { ResponsiveBreakpointsService } from './responsive-breakpoints.service';

describe('ResponsiveBreakpointsService', () => {
  let service: ResponsiveBreakpointsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResponsiveBreakpointsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
