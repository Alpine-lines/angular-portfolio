import { HttpBackend, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@auth0/auth0-angular';
import { DashboardComponent } from './admin/dashboard/dashboard/dashboard.component';
import { NewBlogPostComponent } from './admin/new-blog-post/new-blog-post.component';
import { NewProjectComponent } from './admin/new-project/new-project-component';
import { PageNotFoundComponent } from './components/utils/page-not-found/page-not-found/page-not-found.component';
import { AboutMepageComponent } from './pages/core/about-me/aboutmepage.component';
import { BlogPostComponent } from './pages/core/blog-post/blogpostpage.component';
import { BlogpageComponent } from './pages/core/blogpage/blogpage.component';
import { ContactMepageComponent } from './pages/core/contact-me/contactmepage.component';
import { IndexComponent } from './pages/core/index/index.component';
import { PortfoliopageComponent } from './pages/core/portfoliopage/portfoliopage.component';
import { ProjectpageComponent } from './pages/core/projectpage/projectpage.component';
import { BlogResolver } from './utils/resolvers/blog/get-blog.resolver';
import { BlogsResolver } from './utils/resolvers/blog/get-blogs.resolver';
import { ClientsResolver } from './utils/resolvers/clients/get-clients.resolver';
import { ProjectResolver } from './utils/resolvers/portfolio/get-project.resolver';
import { ProjectsResolver } from './utils/resolvers/portfolio/get-projects.resolver';

const routes: Routes = [
  // {
  //   path: "*",
  //   redirectTo: "",
  //   pathMatch: "full"
  // },
  {
    path: "",
    component: IndexComponent
  },
  {
    path: "about-me",
    component: AboutMepageComponent
  },
  {
    path: "contact-me",
    component: ContactMepageComponent
  },
  {
    path: "portfolio",
    component: PortfoliopageComponent,
    resolve: { projects: ProjectsResolver },
    children: [
      {
        path: ':slug',
        component: ProjectResolver,
    resolve: { projects: ProjectResolver }
      }
    ]
  },
  {
    path: "blog",
    component: BlogpageComponent,
    resolve: { posts: BlogsResolver },
    children: [
      {
        path: ':slug',
        component: BlogPostComponent,
        resolve: { posts: BlogsResolver },
      }
    ]
  },
  {
    path: "clients",
    component: BlogpageComponent,
    resolve: { clients: ClientsResolver }
  },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    component: DashboardComponent
  },
  {
    path: "new-post",
    canActivate: [AuthGuard],
    component: NewBlogPostComponent
  },
  {
    path: "new-project",
    canActivate: [AuthGuard],
    component: NewProjectComponent
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(
    routes,
    {
      enableTracing: true,
      // preloadingStrategy: PreloadAllModules
    }
  )],
  exports: [RouterModule],
  providers: [  ]
})
export class AppRoutingModule { }
