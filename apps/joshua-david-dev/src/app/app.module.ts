import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import {APP_BASE_HREF } from '@angular/common';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { LayoutModule } from '@angular/cdk/layout';

import { BsDropdownModule } from "ngx-bootstrap/dropdown";
// import { ProgressbarModule } from "ngx-bootstrap/progressbar";
// import { TooltipModule } from "ngx-bootstrap/tooltip";
import { CollapseModule } from "ngx-bootstrap/collapse";
import { TabsModule } from "ngx-bootstrap/tabs";
// import { PaginationModule } from "ngx-bootstrap/pagination";
// import { AlertModule } from "ngx-bootstrap/alert";
// import { BsDatepickerModule } from "ngx-bootstrap/datepicker";
import { CarouselModule } from "ngx-bootstrap/carousel";
// import { ModalModule } from "ngx-bootstrap/modal";

import { PagesModule } from "./pages/pages.module";
import { ComponentsModule } from "./components/components.module";
import { BlogService } from './services/blog/blog.service';
import { PortfolioService } from './services/portfolio/portfolio.service';
import { UtilsModule } from "./utils/utils.module";
import { LoggerModule, NGXLogger, NgxLoggerLevel } from "ngx-logger";
import { ClientService } from "./services/clients/client.service";
import { AdminModule } from "./admin/admin.module";

import { AuthModule } from '@auth0/auth0-angular';
import authConfig from './auth-config';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    AppRoutingModule,
    LoggerModule.forRoot({
      level: NgxLoggerLevel.TRACE,
      colorScheme: ['purple', 'teal', 'gray', 'gray', 'red', 'red', 'red'],
      timestampFormat: 'EEEE, MMMM d, y'
    }),
    BsDropdownModule.forRoot(),
    CollapseModule.forRoot(),
    TabsModule.forRoot(),
    PagesModule,
    NgxChartsModule,
    ComponentsModule,
    // PaginationModule.forRoot(),
    // AlertModule.forRoot(),
    // BsDatepickerModule.forRoot(),
    CarouselModule.forRoot(),
    // ModalModule.forRoot(),
    LayoutModule,
    ReactiveFormsModule,
    UtilsModule,
    AdminModule,
    AuthModule.forRoot(
      authConfig
    ),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
    { provide: BlogService, useClass: BlogService },
    { provide: PortfolioService, useClass: PortfolioService },
    { provide: ClientService, useClass: PortfolioService },
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
