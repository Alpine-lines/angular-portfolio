import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { NavbarComponent } from './core/navbar/navbar.component';
import { FooterComponent } from './core/footer/footer.component';
import { SocialIconsComponent } from './utils/social-icons/social-icons.component';
import { FeaturedBlogPostsComponent } from './core/featured-blog-posts/featured-blog-posts.component';
import { PostListComponent } from './core/post-list/post-list.component';
import { FeaturedProjectsComponent } from './core/featured-projects/featured-projects.component';
import { ClientSliderComponent } from './utils/client-slider/client-slider.component';
import { ToolsAndTechnologiesComponent } from './utils/tools-and-technologies/tools-and-technologies.component';
import { ProjectGridListComponent } from './core/project-grid-list/project-grid-list.component';
import { UtilsModule } from '../utils/utils.module';
import { AuthButtonComponent } from './core/auth-button/auth-button.component';
import { PageNotFoundComponent } from './utils/page-not-found/page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    SocialIconsComponent,
    FeaturedBlogPostsComponent,
    PostListComponent,
    FeaturedProjectsComponent,
    ClientSliderComponent,
    ToolsAndTechnologiesComponent,
    ProjectGridListComponent,
    AuthButtonComponent,
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    CollapseModule.forRoot(),
    BsDropdownModule.forRoot(),
    UtilsModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent,
    SocialIconsComponent,
    FeaturedBlogPostsComponent,
    FeaturedProjectsComponent,
    ClientSliderComponent,
    ToolsAndTechnologiesComponent,
    PostListComponent,
    AuthButtonComponent,
    PageNotFoundComponent
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'}
  ],
})
export class ComponentsModule { }
