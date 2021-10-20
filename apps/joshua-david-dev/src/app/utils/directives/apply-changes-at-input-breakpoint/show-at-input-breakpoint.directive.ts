import { Breakpoints } from '@angular/cdk/layout';
import { Directive, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ResponsiveBreakpointsService } from 'src/app/services/responsive-breakpoints/responsive-breakpoints.service';

@Directive({
  selector: '[appShowAtInputBreakpoint]'
})
export class ShowAtInputBreakpointDirective {

  @Input('breakpoint' ) private breakpoint?: keyof typeof Breakpoints | string;

  @ViewChild('selector', { static: false }) element!: ElementRef;

  constructor(
    private responsiveBreakpointsService: ResponsiveBreakpointsService,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    const activeBreakpoint: BehaviorSubject<string> = this.responsiveBreakpointsService._activeBreakpoint$;
    if (activeBreakpoint.getValue() == Breakpoints.Handset || activeBreakpoint.getValue() == Breakpoints.Tablet) {
      this.setDisplayNone();
    }
  }

  private setDisplayNone() {
    this.renderer.setAttribute(this.element.nativeElement, 'display', 'none');
  }
}
