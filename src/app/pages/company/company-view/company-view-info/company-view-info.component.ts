import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CompanyService } from '../../../../services/company.service';

@Component({
  selector: 'app-company-view-info',
  templateUrl: './company-view-info.component.html',
  styleUrls: ['./company-view-info.component.scss']
})
export class CompanyViewInfoComponent implements OnInit {
  private companyId; 

  constructor(
    private route: ActivatedRoute,
    private companyService: CompanyService,
  ) {
    this.companyId = this.route.snapshot.queryParamMap.get('company');
  }
  
  public company: any = {
    socialReason: '',
    business: '',
    address: '',
    neighborhood: '',
    postalCode: '',
    email: '',
    phone: '',
  }
  
  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.companyService.getById(Number(this.companyId)).subscribe((response: any) => {
      this.company = response.data;
    });
  }
}
