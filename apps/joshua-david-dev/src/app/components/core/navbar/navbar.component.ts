import { Breakpoints, MediaMatcher } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  public isCollapsed: boolean = true;
  public isContactMe: boolean = false;

  public url!: Observable<string>;
  private urlSubscription!: Subscription;

  public breakpoints: typeof Breakpoints = Breakpoints;

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.urlSubscription = this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url.includes('contact-me')) {
          this.isContactMe = true;
        } else {
          this.isContactMe = false;
        }
      }
    })
  }

  ngOnDestroy(): void {
    this.urlSubscription.unsubscribe();
  }

}
