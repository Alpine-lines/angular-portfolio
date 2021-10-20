import { Component, OnInit, OnDestroy, HostListener } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { NGXLogger } from "ngx-logger";
import BlogPost from "src/app/models/blogpost.model";
import { BlogService } from "src/app/services/blog/blog.service";

@Component({
  selector: "app-blog-post",
  templateUrl: "blogpostpage.component.html"
})
export class BlogPostComponent implements OnInit, OnDestroy {

  public post?: BlogPost;

  isCollapsed: boolean = true;
  focus: boolean = false;
  focus1: boolean = false;
  focus2: boolean = false;
  focus3: boolean = false;
  focus4: boolean = false;

  constructor(
    private blogService: BlogService,
    private logger: NGXLogger,
    private route: ActivatedRoute
  ) {  }

  @HostListener("document:mousemove", ["$event"])
  onMouseMove(e: MouseEvent | undefined) {
    var squares1 = document.getElementById("square1");
    var squares2 = document.getElementById("square2");
    var squares3 = document.getElementById("square3");
    var squares4 = document.getElementById("square4");
    var squares5 = document.getElementById("square5");
    var squares6 = document.getElementById("square6");
    var squares7 = document.getElementById("square7");
    var squares8 = document.getElementById("square8");

    var posX = e!.clientX - window.innerWidth / 2;
    var posY = e!.clientY - window.innerWidth / 6;

    squares1!.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)";
    squares2!.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)";
    squares3!.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)";
    squares4!.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)";
    squares5!.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)";
    squares6!.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.05 +
      "deg) rotateX(" +
      posY * -0.05 +
      "deg)";
    squares7!.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.02 +
      "deg) rotateX(" +
      posY * -0.02 +
      "deg)";
    squares8!.style.transform =
      "perspective(500px) rotateY(" +
      posX * 0.02 +
      "deg) rotateX(" +
      posY * -0.02 +
      "deg)";
  }

  ngOnInit() {

    const slug: string | null= this.route.snapshot.paramMap.get('slug');

    var body = document.getElementsByTagName("body")[0];
    body.classList.add("blog-post");

    this.logger.info({ slug: slug })
    this.blogService.get(slug).subscribe((data) => {
      this.post = data.post;
      this.logger.info({ post: this.post });
    })
  }

  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("blog-post");
  }

}
