import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolsAndTechnologiesComponent } from './tools-and-technologies.component';

describe('ToolsAndTechnologiesComponent', () => {
  let component: ToolsAndTechnologiesComponent;
  let fixture: ComponentFixture<ToolsAndTechnologiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToolsAndTechnologiesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToolsAndTechnologiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
