import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-company-view-users-form',
  templateUrl: './company-view-users-form.component.html',
  styleUrls: ['./company-view-users-form.component.scss']
})
export class CompanyViewUsersFormComponent implements OnInit {
  public userId; 

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.userId = this.route.snapshot.queryParamMap.get('user');
  }

  private LIST_PATH = '/panel/companys/view/users/list';

  public user: any = {
    id: 1,
    user: 'John Doe',
    email: 'jdoe@gmail.com',
    password: '1234',
    type: 'SUPER ADMIN',
  }

  public back() {
    this.changeView(this.LIST_PATH);
  }

  public save() {
    this.changeView(this.LIST_PATH);
  }
  
  private changeView(path: string) {
    this.router.navigate([path]);
  }

  ngOnInit(): void {
  }
}