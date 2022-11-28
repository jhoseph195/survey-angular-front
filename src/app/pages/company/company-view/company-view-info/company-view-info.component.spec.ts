import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyViewInfoComponent } from './company-view-info.component';

describe('CompanyViewInfoComponent', () => {
  let component: CompanyViewInfoComponent;
  let fixture: ComponentFixture<CompanyViewInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyViewInfoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyViewInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
