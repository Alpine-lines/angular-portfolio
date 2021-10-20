import { Breakpoints } from "@angular/cdk/layout";

export class GLOBALS {
  // Example
  public static API_URL: string = 'https://www.havingfunyet.dev/api/v1';
  // Used to set initial target media query to the
  // Google Material Specification's Web breakpoint
  // TODO: check if implementation of keyof typeof Breakpoints as type is possible
  static DEFAULT_BREAKPOINT: keyof typeof Breakpoints | string = Breakpoints.Web;
}
