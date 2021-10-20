import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedBlogPostsComponent } from './featured-blog-posts.component';

describe('BlogPostsComponent', () => {
  let component: FeaturedBlogPostsComponent;
  let fixture: ComponentFixture<FeaturedBlogPostsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeaturedBlogPostsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedBlogPostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
