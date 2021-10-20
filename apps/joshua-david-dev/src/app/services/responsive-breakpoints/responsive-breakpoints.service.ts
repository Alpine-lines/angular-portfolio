import { ElementRef, Injectable, Renderer2 } from '@angular/core';
import { BreakpointObserver, BreakpointState, Breakpoints } from '@angular/cdk/layout';
import { BehaviorSubject, Subscription } from 'rxjs';
import { NGXLogger } from 'ngx-logger';
import { GLOBALS } from 'src/app/utils/constants/global.constants';
import { FilteredBreakpoint } from 'src/app/models/filtered-breakpoint';

@Injectable({
  providedIn: 'root'
})
export class ResponsiveBreakpointsService {

  // Stores material spec breakpoints with bootstrap breakpoints
  // TODO: implement orientation
  public _activeBreakpoint$: BehaviorSubject<keyof typeof Breakpoints | string> = new BehaviorSubject(GLOBALS.DEFAULT_BREAKPOINT);
  private _breakpointSubscription!: Subscription;

  // Create array of Breakpoints
  public _breakpoints!: string[];

  // Computed property of type boolean which returns true when the
  // comparison of target and active breakpoints is truthy
  public _renderItem!: boolean;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private logger: NGXLogger
  ) {
    this.setActiveBreakpoint();
  }

  ngOnInit() {  }

  ngOnDestroy() {
    this._breakpointSubscription.unsubscribe();
  }

  public setActiveBreakpoint() {
    this.breakpointObserver
      .observe(
        [
          Breakpoints.XSmall,
          Breakpoints.Small,
          Breakpoints.Medium,
          Breakpoints.Large,
          Breakpoints.XLarge,
          Breakpoints.Web,
          Breakpoints.WebPortrait,
          Breakpoints.WebLandscape,
          Breakpoints.Tablet,
          Breakpoints.TabletPortrait,
          Breakpoints.TabletLandscape,
          Breakpoints.Handset,
          Breakpoints.HandsetPortrait,
          Breakpoints.HandsetLandscape,
        ]
      ).subscribe((state: BreakpointState) => {
        if (state.breakpoints[Breakpoints.XSmall]) {
          this._activeBreakpoint$.next(Breakpoints.XSmall);
          this.logger.log({
            BREAKPOINT_MATCHED: Breakpoints.XSmall, MESSAGE: 'Matches XSmall viewport or XSmall mode'
          });
        } else if (state.breakpoints[Breakpoints.Small]) {
          this._activeBreakpoint$.next(Breakpoints.Small)
          this.logger.log({
            BREAKPOINT_MATCHED: Breakpoints.Small, MESSAGE: 'Matches Small viewport or Small mode'
          });
        } else if (state.breakpoints[Breakpoints.Medium]) {
          this._activeBreakpoint$.next(Breakpoints.Medium)
          this.logger.log({
            BREAKPOINT_MATCHED: Breakpoints.Medium, MESSAGE: 'Matches Medium viewport or Medium mode'
          });
        } else if (state.breakpoints[Breakpoints.Large]) {
          this._activeBreakpoint$.next(Breakpoints.Large)
          this.logger.log({
            BREAKPOINT_MATCHED: Breakpoints.Large, MESSAGE: 'Matches Large viewport or Large mode'
          });
        } else if (state.breakpoints[Breakpoints.XLarge]) {
          this._activeBreakpoint$.next(Breakpoints.XLarge)
          this.logger.log({
            BREAKPOINT_MATCHED: Breakpoints.XLarge, MESSAGE: 'Matches XLarge viewport or XLarge mode'
          });

        } else if (state.breakpoints[Breakpoints.Web]) {
          this._activeBreakpoint$.next(Breakpoints.Web)
          this.logger.log({
            BREAKPOINT_MATCHED: Breakpoints.Web, MESSAGE: 'Matches Web viewport or Web mode'
          });
        } else if (state.breakpoints[Breakpoints.WebLandscape]) {
          this._activeBreakpoint$.next(Breakpoints.WebLandscape)
          this.logger.log({
            BREAKPOINT_MATCHED: Breakpoints.WebLandscape, MESSAGE: 'Matches WebLandscape viewport or WebLandscape mode'
          });
        } else if (state.breakpoints[Breakpoints.WebPortrait]) {
          this._activeBreakpoint$.next(Breakpoints.WebPortrait)
          this.logger.log({
            BREAKPOINT_MATCHED: Breakpoints.WebPortrait, MESSAGE: 'Matches WebPortrait viewport or WebPortrait mode'
          });
        } else if (state.breakpoints[Breakpoints.Tablet]) {
          this._activeBreakpoint$.next(Breakpoints.Tablet)
          this.logger.log({
            BREAKPOINT_MATCHED: Breakpoints.Tablet, MESSAGE: 'Matches Tablet viewport or Tablet mode'
          });
        } else if (state.breakpoints[Breakpoints.TabletLandscape]) {
          this._activeBreakpoint$.next(Breakpoints.TabletLandscape)
          this.logger.log({
            BREAKPOINT_MATCHED: Breakpoints.TabletLandscape, MESSAGE: 'Matches TabletLandscape viewport or TabletLandscape mode'
          });
        } else if (state.breakpoints[Breakpoints.TabletPortrait]) {
          this._activeBreakpoint$.next(Breakpoints.TabletPortrait)
          this.logger.log({
            BREAKPOINT_MATCHED: Breakpoints.TabletPortrait, MESSAGE: 'Matches TabletPortrait viewport or TabletPortrait mode'
          });
        } else if (state.breakpoints[Breakpoints.Handset]) {
          this._activeBreakpoint$.next(Breakpoints.Handset)
          this.logger.log({
            BREAKPOINT_MATCHED: Breakpoints.Handset, MESSAGE: 'Matches Handset viewport or Handset mode'
          });
        } else if (state.breakpoints[Breakpoints.HandsetLandscape]) {
          this._activeBreakpoint$.next(Breakpoints.HandsetLandscape)
          this.logger.log({
            BREAKPOINT_MATCHED: Breakpoints.HandsetLandscape, MESSAGE: 'Matches HandsetLandscape viewport or HandsetLandscape mode'
          });
        } else if (state.breakpoints[Breakpoints.HandsetPortrait]) {
          this._activeBreakpoint$.next(Breakpoints.HandsetPortrait)
          this.logger.log({
            BREAKPOINT_MATCHED: Breakpoints.HandsetPortrait, MESSAGE: 'Matches HandsetPortrait viewport or HandsetPortrait mode'
          });
        }
      });
  }

  public get activeBreakpoint(): string {
    return this._activeBreakpoint$.getValue();
  }

  public get breakpoints(): string[] {
    return this._breakpoints;
  }

  public matchBreakpoint(targetBreakpoint: keyof typeof Breakpoints | string): any[] {
    this.logger.log({
      activeBreakpoint: this._activeBreakpoint$.getValue(),
      targetBreakpoint
    })
    // this._breakpoints = Object.keys(Breakpoints)
      // .filter((key: string, index: number, array: string[]): any => {
      //   const targetIndex = array.indexOf(targetBreakpoint);
      //   return index <= targetIndex;
      // });
    const filteredBreakpoints: FilteredBreakpoint[] = [];
    this._breakpoints = Object.keys(Breakpoints)
      .map((key: string, index: number, array: string[]): any => {
        const targetIndex = array.indexOf(targetBreakpoint);
        if (index <= targetIndex) {
          filteredBreakpoints.push({
            isMatched: this.breakpointObserver.isMatched(targetBreakpoint),
            key: key,
            value: array[index]
          });
         }
      });
    return filteredBreakpoints;
  }
}
