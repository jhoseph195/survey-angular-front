import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyComponent } from './company.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { CompanyListComponent } from './company-list/company-list.component';
import { CompanyFormComponent } from './company-form/company-form.component';
import { CompanyViewComponent } from './company-view/company-view.component';
import { CompanyViewUsersListComponent } from './company-view/company-view-users-list/company-view-users-list.component';
import { CompanyViewUsersFormComponent } from './company-view/company-view-users-form/company-view-users-form.component';
import { CompanyViewUsersViewComponent } from './company-view/company-view-users-view/company-view-users-view.component';
import { CompanyViewInfoComponent } from './company-view/company-view-info/company-view-info.component';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';



@NgModule({
  declarations: [
    CompanyComponent,
    CompanyListComponent,
    CompanyFormComponent,
    CompanyViewComponent,
    CompanyViewUsersListComponent,
    CompanyViewUsersFormComponent,
    CompanyViewUsersViewComponent,
    CompanyViewInfoComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    RouterModule,
    SharedModule,
    MatCardModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatInputModule,
    MatSelectModule,
    MatTabsModule,
    MatSlideToggleModule
  ]
})
export class CompanyModule { }
