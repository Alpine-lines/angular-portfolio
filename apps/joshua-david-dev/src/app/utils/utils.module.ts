import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
// import { ResponsiveModule } from "ngx-responsive";
import { HideAtInputBreakpointDirective } from './directives/apply-changes-at-input-breakpoint/hide-at-input-breakpoint.directive';
import { ModifyClassListAtInputBreakpointDirective } from './directives/apply-changes-at-input-breakpoint/modify-class-list-at-input-breakpoint.directive';
import { ModifyAttributesAtInputBreakpointDirective } from './directives/apply-changes-at-input-breakpoint/modify-attributes-at-input-breakpoint.directive';
import { ShowAtInputBreakpointDirective } from './directives/apply-changes-at-input-breakpoint/show-at-input-breakpoint.directive';
// Google Material Specification Breakpoint Directives
// Hides any element with given directive when the screen size
// is either Web, Handset, or Tablet.
// TODO: add support for landscape and portrait orientations.

@NgModule({
  declarations: [
    HideAtInputBreakpointDirective,
    ModifyClassListAtInputBreakpointDirective,
    ModifyAttributesAtInputBreakpointDirective,
    ShowAtInputBreakpointDirective,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    HideAtInputBreakpointDirective,
    ModifyClassListAtInputBreakpointDirective,
    ModifyAttributesAtInputBreakpointDirective,
    ShowAtInputBreakpointDirective
  ],
  schemas: [],
  providers: [],
  bootstrap: []
})
export class UtilsModule { }
