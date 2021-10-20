import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.scss']
})
export class NewProjectComponent implements OnInit {
  requiredControl: any;

  authorName: string = '';
  blogTitle: string = '';
  blogSlug: string = '';
  blogBody: string = '';
  featuredImgURL: string = '';



  constructor() { }

  ngOnInit(): void {
  }

}
