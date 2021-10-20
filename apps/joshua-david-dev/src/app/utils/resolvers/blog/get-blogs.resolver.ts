import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import Blog from "src/app/models/project.model";
import { PortfolioService } from "src/app/services/portfolio/portfolio.service";

@Injectable({ providedIn: 'root' })
export class BlogsResolver implements Resolve<Blog[]> {
  constructor(private portfolioService: PortfolioService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    return { posts: this.portfolioService.getAll() };
  }
}
