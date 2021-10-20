import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-featured-blog-posts',
  templateUrl: './featured-blog-posts.component.html',
  styleUrls: ['./featured-blog-posts.component.scss']
})
export class FeaturedBlogPostsComponent implements OnInit {

  @Input() reverse?: boolean = false;

  @ViewChild('featuredPostsContainer', { static: true }) featuredPosts ?: ElementRef;

  constructor() { }

  ngOnInit(): void {
    if (this.reverse) {
      this.featuredPosts?.nativeElement.classList.add('reverse');
    }
  }

}
