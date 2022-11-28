import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss']
})
export class CompanyFormComponent implements OnInit {
  public companyId; 

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.companyId = this.route.snapshot.queryParamMap.get('company');
  }

  private LIST_PATH = 'panel/companys/';

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