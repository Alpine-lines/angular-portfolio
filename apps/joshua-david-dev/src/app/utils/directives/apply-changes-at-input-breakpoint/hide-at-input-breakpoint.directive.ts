import { Breakpoints, MediaMatcher } from '@angular/cdk/layout';
import { Directive, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';
import { NGXLogger } from 'ngx-logger';
import { BehaviorSubject } from 'rxjs';
import { FilteredBreakpoint } from 'src/app/models/filtered-breakpoint';
import { ResponsiveBreakpointsService } from 'src/app/services/responsive-breakpoints/responsive-breakpoints.service';

@Directive({
  selector: '[appHideAtInputBreakpoint]'
})
export class HideAtInputBreakpointDirective {

  @Input() public breakpoint!: keyof typeof Breakpoints | string;

  @ViewChild('element', { static: false }) element?: ElementRef;

  constructor(
    private responsiveBreakpointsService: ResponsiveBreakpointsService,
    private renderer: Renderer2,
    private logger: NGXLogger,
    private mediaMatcher: MediaMatcher
  ) { }

  ngOnInit() {
    this.logger.debug('HideAtInputDirective initialized.');
    this.logger.debug('Checking media query.');
    const mediaQueryList = this.mediaMatcher.matchMedia(this.breakpoint);
    // console.debug({
    //   MEDIA_EQUALS_SERVICE: mediaQueryList.media == this.responsiveBreakpointsService._activeBreakpoint$.getValue(),
    //   mediaQueryList: mediaQueryList,
    const  responsiveServiceBehaviorSubject: BehaviorSubject<string> = this.responsiveBreakpointsService._activeBreakpoint$;
    //   elementRef: this.elementRef
    // });
    const hideComponent = this.responsiveBreakpointsService._activeBreakpoint$.getValue()
    console.log({
      msg: 'Component successfully hidden.',
      hideComponent: hideComponent,
      serviceSubject: this.responsiveBreakpointsService._activeBreakpoint$,
      mediaQueryList: mediaQueryList.matches
    });
    if (responsiveServiceBehaviorSubject.getValue()) {
      this.logger.debug('Media query true.');
      this.setDisplayNone();
    }
    // this.responsiveBreakpointsService.setActiveBreakpoint();
    // this.responsiveBreakpointsService.matchBreakpoint(this.breakpoint)
    //   .map((key: string, index: number, array: FilteredBreakpoint[]) => {
    //     this.logger.debug('Set element attritbue display to value none.');
    //     this.setDisplayNone();
    //   });
  }

  private setDisplayNone() {
    this.logger.debug({
      msg: 'Calling setAttribute()',
    });
    this.renderer.setProperty(this.element?.nativeElement, 'aria-hidden', 'true');
    this.renderer.setProperty(this.element?.nativeElement, 'disabled', true);
  }
}
