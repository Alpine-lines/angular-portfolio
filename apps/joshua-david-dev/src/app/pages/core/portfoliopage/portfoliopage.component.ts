import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import Project from "src/app/models/project.model";
import { LoggerService } from "src/app/services/logger/logger-service.service";

@Component({
  selector: "app-portfoliopage",
  templateUrl: "portfoliopage.component.html",
  styleUrls: ['portfoliopage.component.scss']
})
export class PortfoliopageComponent implements OnInit, OnDestroy {

  public projects?: Project[];

  isCollapsed: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private logger: LoggerService
  ) {
  }

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("portfolio-page");

    this.route.data.subscribe((data: any) => {
      this.projects = data.projects;
      console.log({ projects: this.projects });
    })
  }
  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("portfolio-page");
  }
}
