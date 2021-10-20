import { BrowserModule } from "@angular/platform-browser";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { APP_BASE_HREF, CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";

import { BsDropdownModule } from "ngx-bootstrap/dropdown";
// import { ProgressbarModule } from "ngx-bootstrap/progressbar";
import { TooltipModule } from "ngx-bootstrap/tooltip";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { TabsModule } from "ngx-bootstrap/tabs";
// import { PaginationModule } from "ngx-bootstrap/pagination";
// import { AlertModule } from "ngx-bootstrap/alert";
// import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { CarouselModule } from "ngx-bootstrap/carousel";
// import { ModalModule } from "ngx-bootstrap/modal";
import { JwBootstrapSwitchNg2Module } from "jw-bootstrap-switch-ng2";
// import { PopoverModule } from "ngx-bootstrap/popover";
import { NgxChartsModule } from '@swimlane/ngx-charts';

import { IndexComponent } from "./core/index/index.component";
import { ContactMepageComponent } from "./core/contact-me/contactmepage.component";
import { ComponentsModule } from "../components/components.module";
import { AboutMepageComponent } from "./core/about-me/aboutmepage.component";
import { ProjectpageComponent } from "./core/projectpage/projectpage.component";
import { PortfoliopageComponent } from "./core/portfoliopage/portfoliopage.component";
import { BlogpageComponent } from "./core/blogpage/blogpage.component";
import { BlogPostComponent } from "./core/blog-post/blogpostpage.component";
import { UtilsModule } from "../utils/utils.module";
import { ClientsComponent } from './core/clients/clients.component';
import { MatFormFieldModule } from "@angular/material/form-field";

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ComponentsModule,
    RouterModule.forChild([]),
    NgxChartsModule,
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    CollapseModule.forRoot(),
    JwBootstrapSwitchNg2Module,
    TabsModule.forRoot(),
    CarouselModule.forRoot(),
    UtilsModule,
    MatFormFieldModule
    // ProgressbarModule.forRoot(),
    // PopoverModule.forRoot(),
    // PaginationModule.forRoot(),
    // AlertModule.forRoot(),
    // BsDatepickerModule.forRoot(),
    // ModalModule.forRoot(),
  ],
  declarations: [
    IndexComponent,
    AboutMepageComponent,
    ContactMepageComponent,
    PortfoliopageComponent,
    ProjectpageComponent,
    BlogpageComponent,
    BlogPostComponent,
    ClientsComponent,
  ],
  exports: [
    IndexComponent,
    AboutMepageComponent,
    ContactMepageComponent,
    PortfoliopageComponent,
    ProjectpageComponent,
    BlogpageComponent,
    BlogPostComponent,
    ClientsComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    {provide: APP_BASE_HREF, useValue: '/'}
  ]
})
export class PagesModule {}
