import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveysViewResponsesViewComponent } from './surveys-view-responses-view.component';

describe('SurveysViewResponsesViewComponent', () => {
  let component: SurveysViewResponsesViewComponent;
  let fixture: ComponentFixture<SurveysViewResponsesViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveysViewResponsesViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveysViewResponsesViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
