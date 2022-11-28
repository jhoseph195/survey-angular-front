import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-company-view-users-list',
  templateUrl: './company-view-users-list.component.html',
  styleUrls: ['./company-view-users-list.component.scss']
})
export class CompanyViewUsersListComponent implements OnInit {

  private surveyId; 

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.surveyId = this.route.snapshot.queryParamMap.get('survey');
  }

  private ADD_PATTH = '/panel/companys/view/users/add';
  private EDDIT_PATTH = '/panel/companys/view/users/edit';

  public data = [
    {
      id: 1,
      user: 'John Doe',
      email: 'jdoe@gmail.com',
      password: '1234',
      type: 'SUPER ADMIN',
    }, {
      id: 2,
      user: 'Joseph Gómez',
      email: 'jgomez@gmail.com',
      password: '1234',
      type: 'CAPTURADOR',
    }, {
      id: 3,
      user: 'Carlos Velazco',
      email: 'cvelazco@gmail.com',
      password: '1234',
      type: 'ADMIN',
    }
  ]

  ngOnInit(): void {
  }

  add() {
    this.changeView(this.ADD_PATTH);
  }

  edit(id: Number) {
    this.changeView(this.EDDIT_PATTH, {user: id});
  }

  delete(id: Number) {
  }

  changeView(path: string, data?: any) {
    if (data) {
      this.router.navigate([path], { queryParams: data});
    } else {
      this.router.navigate([path]);
    }
  }
}