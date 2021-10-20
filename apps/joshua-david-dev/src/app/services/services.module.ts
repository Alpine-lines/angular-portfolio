import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsiveBreakpointsService } from './responsive-breakpoints/responsive-breakpoints.service';
import { NGXLogger } from 'ngx-logger';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [],
  providers: [
    { provide: ResponsiveBreakpointsService, useClass: ResponsiveBreakpointsService },
    { provide: NGXLogger, useClass: NGXLogger }
  ]
})
export class ServicesModule { }
