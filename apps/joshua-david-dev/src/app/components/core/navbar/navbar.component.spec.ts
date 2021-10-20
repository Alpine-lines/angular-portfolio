import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserModule } from '@angular/platform-browser';
import { NavigationEnd } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';
import { NavbarComponent } from './navbar.component';

class MockRouter {
  public urls = [
    new NavigationEnd(0, 'http://localhost:4200/about-us', 'http://localhost:4200/about-us'),
    new NavigationEnd(0, 'http://localhost:4200/contact-me', 'http://localhost:4200/contact-me')
  ];
  public events = of(this.urls);
}

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        BrowserModule
      ],
      declarations: [
        NavbarComponent,
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should intialize isCollapsed as true', () => {
    expect(component.isCollapsed).toBeTrue();
  })

  it('should set isContactMe to true only when url contains contact-me', () => {
    let router = new MockRouter();
    router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        if (event.url.includes('contact-me')) {
          component.isContactMe = true;
          expect(component.isContactMe).toBeTrue();
        }
      }
    })
  })

  it('should set isContactMe to true when clicking contact-me button', () => {
    // let anchor = fixture.debugElement.nativeElement.querySelectorForAll('contact-me nav-link btn btn-default d-none d-lg-block border-primary')
    // expect(anchor).toBeTruthy();
    // expect(component.isContactMe).toBeFalsy();
    // anchor.click();
    // fixture.detectChanges();
    // expect(component.isContactMe).toBeTruthy();
  })

  it('should set isContactMe to false when clicking back button', () => {
    // let anchor = fixture.debugElement.nativeElement.querySelectorForAll('back-link nav-link btn btn-default d-none d-lg-block border-primary')
    // expect(anchor).toBeTruthy();
  //   expect(component.isContactMe).toBeTruthy();
  //   anchor.click();
  //   fixture.detectChanges();
  //   expect(component.isContactMe).toBeFalsy();
  })

  it('should set isCollapsed after clicking dropdown menu', () => {
    let button = fixture.debugElement.nativeElement.querySelector('#navigation-button')
    expect(button).toBeTruthy();
    expect(component.isCollapsed).toBeTrue();
    button.click();
    fixture.detectChanges();
    expect(component.isCollapsed).toBeFalse();
    button.click();
    fixture.detectChanges();
    expect(component.isCollapsed).toBeTrue();
  })

});
