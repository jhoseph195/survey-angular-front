import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { SurveysComponent } from './surveys.component';
import { SurveysListComponent } from './surveys-list/surveys-list.component';
import { SurveysFormComponent } from './surveys-form/surveys-form.component';
import { SurveysViewComponent } from './surveys-view/surveys-view.component';
import { SurveysViewInfoComponent } from './surveys-view/surveys-view-info/surveys-view-info.component';
import { SurveysViewResponsesListComponent } from './surveys-view/surveys-view-responses-list/surveys-view-responses-list.component';
import { SurveysViewResponsesFormComponent } from './surveys-view/surveys-view-responses-form/surveys-view-responses-form.component';
import { SurveysViewResponsesViewComponent } from './surveys-view/surveys-view-responses-view/surveys-view-responses-view.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatTabsModule} from '@angular/material/tabs';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SurveysComponent,
    SurveysListComponent,
    SurveysFormComponent,
    SurveysViewComponent,
    SurveysViewInfoComponent,
    SurveysViewResponsesListComponent,
    SurveysViewResponsesFormComponent,
    SurveysViewResponsesViewComponent,
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
export class SurveysModule { }
