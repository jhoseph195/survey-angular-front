import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SurveysViewInfoComponent } from './surveys-view-info.component';

describe('SurveysViewInfoComponent', () => {
  let component: SurveysViewInfoComponent;
  let fixture: ComponentFixture<SurveysViewInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SurveysViewInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SurveysViewInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
