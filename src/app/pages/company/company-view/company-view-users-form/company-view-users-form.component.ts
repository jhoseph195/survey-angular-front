import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../../../services/users.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-company-view-users-form',
  templateUrl: './company-view-users-form.component.html',
  styleUrls: ['./company-view-users-form.component.scss']
})
export class CompanyViewUsersFormComponent implements OnInit {
  public userId; 
  public companyId; 

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UserService,
  ) {
    this.userId = this.route.snapshot.queryParamMap.get('user');
    this.companyId = this.route.snapshot.queryParamMap.get('company');
  }

  private LIST_PATH = '/panel/companys/view/users/list';

  public user: any = {
    name: '',
    email: '',
    password: '',
    type: 'ADMIN',
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
      if (this.userId) {
        this.update();
      } else {
        this.insert();
      }
    });
  }
  
  insert() {
    const data = {...this.user, companyId: this.companyId};

    this.userService.create(data).subscribe((response: any) => {
      Swal.fire( 'Éxito', 'La información se guardo con éxito', 'success');
      this.changeView(this.LIST_PATH);
    });
  }

  update() {
    const data = {...this.user, companyId: this.companyId};

    this.userService.update(data, Number(this.userId)).subscribe((response: any) => {
      Swal.fire( 'Éxito', 'La información se actualizó con éxito', 'success');
      this.changeView(this.LIST_PATH);
    });
  }

  private changeView(path: string) {
    this.router.navigate([path], { queryParams: {company: this.companyId}});
  }

  getData() {
    this.userService.getById(Number(this.userId)).subscribe((response: any) => {
      delete response.data.password;
      this.user = response.data;
    });
  }

  ngOnInit(): void {
    if (this.userId) {
      this.getData();
    }
  }
}