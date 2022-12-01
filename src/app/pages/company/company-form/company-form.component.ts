import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from '../../../services/company.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-company-form',
  templateUrl: './company-form.component.html',
  styleUrls: ['./company-form.component.scss']
})
export class CompanyFormComponent implements OnInit {
  public companyId; 

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private companyService: CompanyService,
  ) {
    this.companyId = this.route.snapshot.queryParamMap.get('company');
  }

  private LIST_PATH = 'panel/companys/';

  public company: any = {
    socialReason: '',
    business: '',
    address: '',
    neighborhood: '',
    postalCode: '',
    email: '',
    phone: '',
  }

  public back() {
    this.changeView(this.LIST_PATH);
  }

  public save() {
    Swal.fire({
      title: 'Guardar',
      text: '¿Está seguro de guardar esta información?',
      icon: 'question',
      showCancelButton: true,
      confirmButtonText: 'Sí, guardar',
      cancelButtonText: 'Cancelar'
    }).then(async (result) => {
      if (this.companyId) {
        this.update();
      } else {
        this.insert();
      }
    });
  }
  
  insert() {
    this.companyService.create(this.company).subscribe((response: any) => {
      Swal.fire( 'Éxito', 'La información se guardo con éxito', 'success');
      this.changeView(this.LIST_PATH);
    });
  }

  update() {
    this.companyService.update(this.company, Number(this.companyId)).subscribe((response: any) => {
      Swal.fire( 'Éxito', 'La información se actualizó con éxito', 'success');
      this.changeView(this.LIST_PATH);
    });
  }
  
  private changeView(path: string) {
    this.router.navigate([path]);
  }

  getData() {
    this.companyService.getById(Number(this.companyId)).subscribe((response: any) => {
      this.company = response.data;
    });
  }

  ngOnInit(): void {
    if (this.companyId) {
      this.getData();
    }
  }
}