import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyViewUsersViewComponent } from './company-view-users-view.component';

describe('CompanyViewUsersViewComponent', () => {
  let component: CompanyViewUsersViewComponent;
  let fixture: ComponentFixture<CompanyViewUsersViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyViewUsersViewComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyViewUsersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
