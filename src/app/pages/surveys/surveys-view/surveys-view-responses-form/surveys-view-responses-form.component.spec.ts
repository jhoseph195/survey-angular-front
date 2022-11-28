import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveysViewResponsesFormComponent } from './surveys-view-responses-form.component';

describe('SurveysViewResponsesFormComponent', () => {
  let component: SurveysViewResponsesFormComponent;
  let fixture: ComponentFixture<SurveysViewResponsesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveysViewResponsesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveysViewResponsesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
