import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company-view-info',
  templateUrl: './company-view-info.component.html',
  styleUrls: ['./company-view-info.component.scss']
})
export class CompanyViewInfoComponent implements OnInit {
  private companyId; 

  constructor(
    private route: ActivatedRoute
  ) {
    this.companyId = this.route.snapshot.queryParamMap.get('company');
  }
  
  public company: any = {
    id: 1,
    socialReason: 'IKEA Distribution Services Spain S.A.',
    bussinessActivity: 'Venta minorista de muebles y objetos para el hogar y decoración',
    street: 'Av. del Peñón 355',
    colonyName: 'Moctezuma 2da Secc',
    postalCode: '1234',
    contactEmail: 'contacto@ikea.com',
    contactPhone: '3311223344',
  }

  
  ngOnInit(): void {
  }
}
