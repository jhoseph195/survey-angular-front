import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../../services/users.service';

@Component({
  selector: 'app-company-view-users-list',
  templateUrl: './company-view-users-list.component.html',
  styleUrls: ['./company-view-users-list.component.scss']
})
export class CompanyViewUsersListComponent implements OnInit {

  private companyId; 

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
  ) {
    this.companyId = this.route.snapshot.queryParamMap.get('company');
  }

  private ADD_PATTH = '/panel/companys/view/users/add';
  private EDDIT_PATTH = '/panel/companys/view/users/edit';

  public data = null;
  public total = 0;

  public filters = {};

  ngOnInit(): void {
  }

  add() {
    this.changeView(this.ADD_PATTH, {company: this.companyId});
  }

  edit(id: number) {
    this.changeView(this.EDDIT_PATTH, {company: this.companyId, user: id});
  }

  delete(id: number) {
    this.userService.delete(id).subscribe((result: any) => {
      this.getData(this.filters);
    });
  }
  
  getData(filters: any) {
    this.filters = filters;
    filters.companyId = this.companyId;
    
    this.userService.getWithFilters(filters).subscribe((result: any) => {
      this.data = result.data;
      this.total = result.count;
    });
  }


  changeView(path: string, data?: any) {
    if (data) {
      this.router.navigate([path], { queryParams: data});
    } else {
      this.router.navigate([path]);
    }
  }
}