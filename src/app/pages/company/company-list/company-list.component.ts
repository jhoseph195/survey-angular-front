import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-company-list',
  templateUrl: './company-list.component.html',
  styleUrls: ['./company-list.component.scss']
})
export class CompanyListComponent implements OnInit {
  constructor(
    private router: Router,
  ) { }

  private ADD_PATTH = '/panel/companys/add';
  private EDIT_PATTH = '/panel/companys/edit';
  private VIEW_PATTH = '/panel/companys/view';

  public data = [
    {
      id: 1,
      socialReason: 'IKEA Distribution Services Spain S.A.',
      bussinessActivity: 'Venta minorista de muebles y objetos para el hogar y decoración',
      street: 'Av. del Peñón 355',
      colonyName: 'Moctezuma 2da Secc',
      postalCode: '1234',
      contactEmail: 'contacto@ikea.com',
      contactPhone: '3311223344',
    }, {
      id: 2,
      socialReason: 'LEGO México, S.A. de C.V.',
      bussinessActivity: 'Productora de juguetes',
      street: 'Av. del Peñón 355',
      colonyName: 'Moctezuma 2da Secc',
      postalCode: '1234',
      contactEmail: 'contacto@lego.com',
      contactPhone: '3311223344',
    }, {
      id: 3,
      socialReason: 'KOF COCA-COLA FEMSA, S.A.B. DE C.V.',
      bussinessActivity: 'Productora alimenticia',
      street: 'Av. del Peñón 355',
      colonyName: 'Moctezuma 2da Secc',
      postalCode: '1234',
      contactEmail: 'contacto@coca-cola.com',
      contactPhone: '3311223344',
    }
  ]

  ngOnInit(): void {
  }

  
  add() {
    this.changeView(this.ADD_PATTH);
  }

  view(id: Number) {
    this.changeView(this.VIEW_PATTH, {company: id});
  }

  edit(id: Number) {
    this.changeView(this.EDIT_PATTH, {company: id});
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
