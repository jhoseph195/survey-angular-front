import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyViewUsersFormComponent } from './company-view-users-form.component';

describe('CompanyViewUsersFormComponent', () => {
  let component: CompanyViewUsersFormComponent;
  let fixture: ComponentFixture<CompanyViewUsersFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyViewUsersFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyViewUsersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
