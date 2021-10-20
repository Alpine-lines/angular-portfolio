import { Component, Input, OnInit } from '@angular/core';
import BlogPost from 'src/app/models/blogpost.model';
import { blogPosts } from '../../../../assets/portfolio/data';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.sass']
})
export class PostListComponent implements OnInit {

  @Input() pageSize: number = 6;

  // TODO: Add Pagination
  //       posts: PostListPage[] where PostListPage: BlogPost[]
  //       page includes *ngFor page, i of posts
  //       post card includes *ngFor post of posts[]

  posts: BlogPost[] = [];

  constructor() { }

  ngOnInit(): void {
    this.posts = blogPosts;
  }

}
