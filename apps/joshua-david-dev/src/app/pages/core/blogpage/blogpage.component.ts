import { Component, OnInit, OnDestroy, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import BlogPost from "src/app/models/blogpost.model";
import { LoggerService } from "src/app/services/logger/logger-service.service";

@Component({
  selector: "app-blog",
  templateUrl: "blogpage.component.html",
})
export class BlogpageComponent implements OnInit, OnDestroy {

  public posts?: BlogPost[];

  isCollapsed = true;
  focus: boolean = false;
  focus1: boolean = false;
  focus2: boolean = false;
  date = new Date();

  constructor(
    private route: ActivatedRoute,
    private logger: LoggerService
  ) {  }

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("blog-page");

    this.route.data.subscribe((data: any) => {
      this.posts = data.posts;
      console.log({ posts: this.posts })
    })

  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("blog-page");
  }

  download($event: any) {

  }
}
