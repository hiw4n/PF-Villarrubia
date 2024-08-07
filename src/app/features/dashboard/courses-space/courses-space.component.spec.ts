import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursesSpaceComponent } from './courses-space.component';

describe('CoursesSpaceComponent', () => {
  let component: CoursesSpaceComponent;
  let fixture: ComponentFixture<CoursesSpaceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CoursesSpaceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoursesSpaceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
