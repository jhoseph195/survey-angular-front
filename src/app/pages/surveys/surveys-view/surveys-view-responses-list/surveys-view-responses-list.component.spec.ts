import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveysViewResponsesListComponent } from './surveys-view-responses-list.component';

describe('SurveysViewResponsesListComponent', () => {
  let component: SurveysViewResponsesListComponent;
  let fixture: ComponentFixture<SurveysViewResponsesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveysViewResponsesListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveysViewResponsesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
