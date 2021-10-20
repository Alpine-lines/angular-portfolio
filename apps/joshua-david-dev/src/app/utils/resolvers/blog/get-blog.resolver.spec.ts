import { TestBed } from '@angular/core/testing';

import { BlogResolver } from './get-blog.resolver';

describe('BlogPostResolver', () => {
  let resolver: BlogResolver;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    resolver = TestBed.inject(BlogResolver);
  });

  it('should be created', () => {
    expect(resolver).toBeTruthy();
  });
});
