import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SurveysModule } from './surveys/surveys.module';
import { CompanyModule } from './company/company.module';

@NgModule({
  declarations: [
  ],
  imports: [
    CommonModule,
    SurveysModule,
    CompanyModule,
    TranslateModule,
  ],
  exports: [
    TranslateModule
  ]
})
export class PagesModule { }
