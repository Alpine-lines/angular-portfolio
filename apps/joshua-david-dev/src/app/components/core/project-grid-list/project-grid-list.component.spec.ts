import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectGridListComponent } from './project-grid-list.component';

describe('ProjectGridListComponent', () => {
  let component: ProjectGridListComponent;
  let fixture: ComponentFixture<ProjectGridListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectGridListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectGridListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
