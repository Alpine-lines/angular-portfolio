import { Breakpoints } from '@angular/cdk/layout';
import { Directive, ElementRef, Input, Renderer2, ViewChild } from '@angular/core';
import { FilteredBreakpoint } from 'src/app/models/filtered-breakpoint';
import { ResponsiveBreakpointsService } from 'src/app/services/responsive-breakpoints/responsive-breakpoints.service';

@Directive({
  selector: '[appModifyAttributesAtInputBreakpoint]'
})
export class ModifyAttributesAtInputBreakpointDirective {

  @Input('breakpoint') private breakpoint: keyof typeof Breakpoints | string = Breakpoints.Web;
  @Input('attributes') private attributes: string | string[] = '';

  @ViewChild('element', { static: false }) element!: ElementRef;

  constructor(
    private responsiveBreakpointsService: ResponsiveBreakpointsService,
    private renderer: Renderer2
  ) { }

  ngOnInit() {
    this.responsiveBreakpointsService.matchBreakpoint(this.breakpoint)
      .map((key: string, index: number, array: FilteredBreakpoint []) => {
        this.setAttributes();
      });
  }

  private setAttributes() {
    if (typeof this.attributes == 'string') {
      this.renderer.setAttribute(this.element.nativeElement, 'display', 'none');
    } else if (this.attributes.length) {
      this.attributes.map((attribute: any) => {
        if (attribute.namespace) {
          this.renderer.setAttribute(this.element.nativeElement, attribute.name, attribute.value, attribute.namespace);
        } else {
          this.renderer.setAttribute(this.element.nativeElement, attribute.name, attribute.value);
        }
      })
    }
  }
}
