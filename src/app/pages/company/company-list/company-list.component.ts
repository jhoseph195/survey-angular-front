import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CompanyService } from '../../../services/company.service';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {
  constructor(
    private router: Router,
    private companyService: CompanyService,
  ) { }

  private ADD_PATTH = '/panel/companys/add';
  private EDIT_PATTH = '/panel/companys/edit';
  private VIEW_PATTH = '/panel/companys/view';

  public data = null;
  public total = 0;
  
  public filters = {};

  ngOnInit(): void {
  }

  getData(filters: any) {
    this.filters = filters;
    this.companyService.getWithFilters(filters).subscribe((result: any) => {
      this.data = result.data;
      this.total = result.count;
    });
  }
  
  add() {
    this.changeView(this.ADD_PATTH);
  }

  view(id: number) {
    this.changeView(this.VIEW_PATTH, {company: id});
  }

  edit(id: number) {
    this.changeView(this.EDIT_PATTH, {company: id});
  }
  
  delete(id: number) {
    this.companyService.delete(id).subscribe((result: any) => {
      this.getData(this.filters);
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
