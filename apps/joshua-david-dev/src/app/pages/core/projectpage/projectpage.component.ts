import { Component, OnInit, OnDestroy } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Chart, ChartConfiguration } from "chart.js";
import { NGXLogger } from "ngx-logger";
import Project from "src/app/models/project.model";
import { LoggerService } from "src/app/services/logger/logger-service.service";

@Component({
  selector: "app-projectpage",
  templateUrl: "projectpage.component.html"
})
export class ProjectpageComponent implements OnInit, OnDestroy {

  public project?: Project;

  isCollapsed = true;

  constructor(
    private route: ActivatedRoute,
    private logger: NGXLogger
  ) {}

  ngOnInit() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.add("project-page");

    this.route.data.subscribe((data) => {
      this.project = data.project;
      this.logger.debug({ project: this.project });
    })
  }

  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("project-page");
  }
}
