import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import Project from "src/app/models/project.model";
import { PortfolioService } from "src/app/services/portfolio/portfolio.service";

@Injectable({ providedIn: 'root' })
export class ProjectResolver implements Resolve<Project> {
  constructor(
    private portfolioService: PortfolioService,

    ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    return { project: this.portfolioService.get(route.params.slug) };
  }
}
