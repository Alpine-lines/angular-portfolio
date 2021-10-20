import {TestBed, ComponentFixture, fakeAsync, tick} from '@angular/core/testing';
import {TestbedHarnessEnvironment} from '@angular/cdk/testing/testbed';
import {MatFormFieldHarness} from '@angular/material/form-field/testing';
import {HarnessLoader} from '@angular/cdk/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting,
} from '@angular/platform-browser-dynamic/testing';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputHarness } from '@angular/material/input/testing';
import { NewProjectComponent } from './new-project-component';

describe('NewProjectComponent', () => {
  let fixture: ComponentFixture<NewProjectComponent>

  beforeAll(() => {
    TestBed.initTestEnvironment(BrowserDynamicTestingModule, platformBrowserDynamicTesting());
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MatFormFieldModule, MatInputModule, NoopAnimationsModule],
    }).compileComponents();
    fixture = TestBed.createComponent(NewProjectComponent);
    fixture.detectChanges();
  });

  it('should update the favorite color in the component', fakeAsync(() => {
     const component = fixture.componentInstance;
     const input = fixture.nativeElement.querySelector('input');
     const event = createNewEvent('input');

     input.value = 'Blog Title';
     input.dispatchEvent(event);

     fixture.detectChanges();

     expect(component.blogTitle).toEqual('Blog Title');
  }));

  it('should update the post body with the textarea', fakeAsync(() => {

    fixture.detectChanges();

    tick();

    const textarea = fixture.nativeElement.querySelector('textarea');

    textarea.value('Lorem ipsum dolor sit amet...');

     expect(textarea.value).toBe('Lorem ipsum dolor sit amet...');
   }));
});
function createNewEvent(arg0: string) {
  throw new Error('Function not implemented.');
}

