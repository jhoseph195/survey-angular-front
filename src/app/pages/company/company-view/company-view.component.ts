import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-company-view',
  templateUrl: './company-view.component.html',
  styleUrls: ['./company-view.component.scss']
})
export class CompanyViewComponent implements OnInit {

  private companyId; 

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.companyId = this.route.snapshot.queryParamMap.get('company');
  }
  private LIST_PATH = '/panel/companys';
  private INFO_PATH = '/panel/companys/view/info';
  private RESPONSES_PATH = '/panel/companys/view/users/list';

  public back() {
    this.changeView(this.LIST_PATH);
  }

  public tabClicked($even: any) {
    switch ($even.index) {
      case 0:
        this.changeView(this.INFO_PATH, { company: this.companyId });
        break;
      case 1:
        this.changeView(this.RESPONSES_PATH, { company: this.companyId });
        break;
      default:
        break;
    }
  }

  public changeView(path: string, data?: any) {
    if (data) {
      this.router.navigate([path], { queryParams: data });
    } else {
      this.router.navigate([path]);
    }
  }

  ngOnInit(): void {
  }
}
