import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewBlogPostComponent } from './new-blog-post/new-blog-post.component';
import { NewProjectComponent } from './new-project/new-project-component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { BlogsResolver } from '../utils/resolvers/blog/get-blogs.resolver';
import { ProjectsResolver } from '../utils/resolvers/portfolio/get-projects.resolver';
import { ClientsResolver } from '../utils/resolvers/clients/get-clients.resolver';
import { MatFormFieldModule } from '@angular/material/form-field';

// TODO: Create ManageBlog, ManageProjects, and ManageClients to provide material data tables that allow for the changing
//       of publication status (Published, Archived, Draft).
const routes = [
  {
    path: '',
    component: DashboardComponent,
    // resolve: {
    //   blogs: BlogsResolver,
    //   projects: ProjectsResolver,
    //   clients: ClientsResolver
    // }
  },
  // {
  //   path: "blog",
  //   component: NewBlogPostComponent
  // },
  {
    path: "new-post",
    component: NewBlogPostComponent
  },
  // {
  //   path: "/projects",
  //   component: NewProjectComponent
  // },
  {
    path: "new-project",
    component: NewProjectComponent
  },
  // {
  //   path: 'clients',
  //   component: ManageClientsComponent
  // },
  // {
  //   path: 'clients/new',
  //   component: NewClientComponent
  // }
]

@NgModule({
  declarations: [
    NewBlogPostComponent,
    NewProjectComponent,
    DashboardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule
  ],
  exports: [
    DashboardComponent,
    NewBlogPostComponent,
    NewProjectComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [  ]
})
export class AdminModule { }
