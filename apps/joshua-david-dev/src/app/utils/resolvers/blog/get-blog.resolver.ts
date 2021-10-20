import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import BlogPost from "src/app/models/project.model";
import { BlogService } from "src/app/services/blog/blog.service";

@Injectable({ providedIn: 'root' })
export class BlogResolver implements Resolve<BlogPost> {
  constructor(
    private blogService: BlogService
  ) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any>|Promise<any>|any {
    const path: string = route.params.id;
    return this.blogService.get(path);
  }
}
