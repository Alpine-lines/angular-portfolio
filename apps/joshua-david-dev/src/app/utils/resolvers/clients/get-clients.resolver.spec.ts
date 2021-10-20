import { TestBed } from '@angular/core/testing';

import { GetClientsResolver } from './get-clients.resolver';

describe('GetClientsResolver', () => {
  let resolver: GetClientsResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(GetClientsResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
