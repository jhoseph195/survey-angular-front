import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyViewUsersListComponent } from './company-view-users-list.component';

describe('CompanyViewUsersListComponent', () => {
  let component: CompanyViewUsersListComponent;
  let fixture: ComponentFixture<CompanyViewUsersListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyViewUsersListComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanyViewUsersListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
