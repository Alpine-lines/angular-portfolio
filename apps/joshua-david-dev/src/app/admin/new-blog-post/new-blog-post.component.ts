import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-blog-post',
  templateUrl: './new-blog-post.component.html',
  styleUrls: ['./new-blog-post.component.sass']
})
export class NewBlogPostComponent implements OnInit {
  requiredControl: any;


  constructor() { }

  ngOnInit(): void {
  }

}
