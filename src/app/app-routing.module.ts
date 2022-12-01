import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './core/login/login.component';
import { PanelComponent } from './core/panel/panel.component';
import { AdminGuard } from './guards/admin.guard';
import { LoginGuard } from './guards/login.guard';
import { CompanyFormComponent } from './pages/company/company-form/company-form.component';
import { CompanyListComponent } from './pages/company/company-list/company-list.component';
import { CompanyViewInfoComponent } from './pages/company/company-view/company-view-info/company-view-info.component';
import { CompanyViewUsersFormComponent } from './pages/company/company-view/company-view-users-form/company-view-users-form.component';
import { CompanyViewUsersListComponent } from './pages/company/company-view/company-view-users-list/company-view-users-list.component';
import { CompanyViewUsersViewComponent } from './pages/company/company-view/company-view-users-view/company-view-users-view.component';
import { CompanyViewComponent } from './pages/company/company-view/company-view.component';
import { CompanyComponent } from './pages/company/company.component';
import { SurveysFormComponent } from './pages/surveys/surveys-form/surveys-form.component';
import { SurveysListComponent } from './pages/surveys/surveys-list/surveys-list.component';
import { SurveysViewInfoComponent } from './pages/surveys/surveys-view/surveys-view-info/surveys-view-info.component';
import { SurveysViewResponsesListComponent } from './pages/surveys/surveys-view/surveys-view-responses-list/surveys-view-responses-list.component';
import { SurveysViewResponsesViewComponent } from './pages/surveys/surveys-view/surveys-view-responses-view/surveys-view-responses-view.component';
import { SurveysViewComponent } from './pages/surveys/surveys-view/surveys-view.component';
import { SurveysComponent } from './pages/surveys/surveys.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'panel',
    pathMatch: 'full'
  }, {
    path: 'login',
    component: LoginComponent,
    canActivate: [ LoginGuard ]
  }, {
    path: 'panel',
    component: PanelComponent,
    canActivate: [ AdminGuard ],
    children: [
      {
        path: '',
        redirectTo: 'survey',
        pathMatch: 'full',
      }, {
        path: 'survey',
        component: SurveysComponent,
        canActivate: [ AdminGuard ],
        children: [
          {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full',
          }, {
            path: 'list',
            component: SurveysListComponent,
            canActivate: [ AdminGuard ],
          }, {
            path: 'add',
            component: SurveysFormComponent,
            canActivate: [ AdminGuard ],
          }, {
            path: 'edit',
            component: SurveysFormComponent,
            canActivate: [ AdminGuard ],
          }, {
            path: 'view/responses/view',
            component: SurveysViewResponsesViewComponent,
            canActivate: [ AdminGuard ],
          }, {
            path: 'view',
            component: SurveysViewComponent,
            canActivate: [ AdminGuard ],
            children: [
              {
                path: '',
                redirectTo: 'info',
                pathMatch: 'full',
              }, {
                path: 'info',
                component: SurveysViewInfoComponent,
                canActivate: [ AdminGuard ],
              }, {
                path: 'responses/list',
                component: SurveysViewResponsesListComponent,
                canActivate: [ AdminGuard ],
              }, {
                path: '**',
                redirectTo: 'info',
                pathMatch: 'full'
              }
            ]
          }, {
            path: '**',
            redirectTo: 'list',
            pathMatch: 'full'
          }
        ]
      }, {
        path: 'companys',
        component: CompanyComponent,
        canActivate: [ AdminGuard ],
        children: [
          {
            path: '',
            redirectTo: 'list',
            pathMatch: 'full',
          }, {
            path: 'list',
            component: CompanyListComponent,
            canActivate: [ AdminGuard ],
          }, {
            path: 'add',
            component: CompanyFormComponent,
            canActivate: [ AdminGuard ],
          }, {
            path: 'edit',
            component: CompanyFormComponent,
            canActivate: [ AdminGuard ],
          }, {
            path: 'view/users/add',
            component: CompanyViewUsersFormComponent,
            canActivate: [ AdminGuard ],
          }, {
            path: 'view/users/edit',
            component: CompanyViewUsersFormComponent,
            canActivate: [ AdminGuard ],
          }, {
            path: 'view/users/view',
            component: CompanyViewUsersViewComponent,
            canActivate: [ AdminGuard ],
          }, {
            path: 'view',
            component: CompanyViewComponent,
            canActivate: [ AdminGuard ],
            children: [
              {
                path: '',
                redirectTo: 'info',
                pathMatch: 'full',
              }, {
                path: 'info',
                component: CompanyViewInfoComponent,
                canActivate: [ AdminGuard ],
              }, {
                path: 'users/list',
                component: CompanyViewUsersListComponent,
                canActivate: [ AdminGuard ],
              }, {
                path: '**',
                redirectTo: 'info',
                pathMatch: 'full'
              }
            ]
          }
        ]
      }
    ]
  },
  { path: '**', redirectTo: 'panel', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
