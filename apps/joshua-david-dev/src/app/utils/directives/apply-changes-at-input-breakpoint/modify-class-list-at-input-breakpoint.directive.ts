import { Breakpoints } from '@angular/cdk/layout';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Directive, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { CssClass } from 'src/app/models/css-class.model';
import { FilteredBreakpoint } from 'src/app/models/filtered-breakpoint';
import { ResponsiveBreakpointsService } from 'src/app/services/responsive-breakpoints/responsive-breakpoints.service';

@Directive({
  selector: '[appModifyClassListAtInputBreakpoint]'
})
export class ModifyClassListAtInputBreakpointDirective {

  @Input('breakpoint') private breakpoint!: keyof typeof Breakpoints | string;
  @Input('addClasses') private addClasses!: CssClass[];
  @Input('removeClasses') private removeClasses?: CssClass[];

  @ViewChild('selector', { static: false }) element!: ElementRef;

  private filteredBreakpoints!: FilteredBreakpoint[];

  constructor(
    private responsiveBreakpointsService: ResponsiveBreakpointsService,
    private renderer: Renderer2,
    private logger: NGXLogger
  ) { }

  ngOnInit() {
    this.logger.trace('Initalizing component');
    if (!this.breakpoint) {
      this.logger.error('No target breakpoint provided');
    } else
      this.logger.trace('Target breakpoint received.');
      this.filteredBreakpoints = this.responsiveBreakpointsService.matchBreakpoint(this.breakpoint);
      this.setClass();
    }

  private setClass() {
    this.logger.trace('Called setClass()')
    if (this.filteredBreakpoints.length > 0) {
      this.filteredBreakpoints.map((item: FilteredBreakpoint): void => {
        if (item.isMatched) {
          this.logger.trace('Breakpoint matched')
          this.removeClasses?.map((item: CssClass) => {
            // @ts-ignore
            this.renderer.removeClass(this.element.nativeElement, Breakpoints[item.key]);
            this.logger.trace('Class Removed');
          });
          this.addClasses.map((item: CssClass) => {
            // @ts-ignore
            this.renderer.addClass(this.element.nativeElement, Breakpoints[item.key]);
            this.logger.trace('Class Removed');
          });
        }
      });
    }
  }
}
