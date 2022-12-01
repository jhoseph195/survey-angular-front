import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from '../../../services/company.service';
import { SurveyService } from '../../../services/survey.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-surveys-form',
  templateUrl: './surveys-form.component.html',
  styleUrls: ['./surveys-form.component.scss']
})
export class SurveysFormComponent implements OnInit {
  public surveyId; 

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private surveyService: SurveyService,
    private companyService: CompanyService,
  ) {
    this.surveyId = this.route.snapshot.queryParamMap.get('survey');
  }

  private LIST_PATH = 'panel/survey/';

  public survey: IScurvey = {
    title: null,
    description: null,
    companyId: null,
    format: []
  }

  public companys = null;

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
      if (this.surveyId) {
        this.update();
      } else {
        this.insert();
      }
    });
  }
  
  insert() {
    this.surveyService.create(this.survey).subscribe((response: any) => {
      Swal.fire( 'Éxito', 'La información se guardo con éxito', 'success');
      this.changeView(this.LIST_PATH);
    });
  }

  update() {
    this.surveyService.update(this.survey, Number(this.surveyId)).subscribe((response: any) => {
      Swal.fire( 'Éxito', 'La información se actualizó con éxito', 'success');
      this.changeView(this.LIST_PATH);
    });
  }

  public removeElement(data: any, index: number) {
    data.splice(index, 1);
  }

  public addQuestion() {
    this.survey.format.push({
      question: null,
      type: 'TEXT',
      isRequired: false,
      options: [{ value: null }]
    });
  }

  public addAnswer(data: any) {
    data.push({ value: null });
  }
  
  private changeView(path: string) {
    this.router.navigate([path]);
  }

  getData() {
    this.surveyService.getById(Number(this.surveyId)).subscribe((response: any) => {
      this.survey.title = response.data.title;
      this.survey.description = response.data.description;
      this.survey.format = response.data.format;
      this.survey.companyId = response.data.company.id;
    });
  }

  getCompanys() {
    this.companyService.getWithFilters({}).subscribe((response: any) => {
      this.companys = response.data;
    });
  }

  ngOnInit(): void {
    this.getCompanys() ;
    
    if (this.surveyId) {
      this.getData();
    }
  }

}

interface IScurvey {
  title: string | null;
  companyId: number | null;
  description: string | null;
  format: IQuestion[];
}

interface IQuestion {
  question: string | null;
  type: string | null;
  isRequired: boolean | null;
  options: IOptions[];
}

interface IOptions {
  value: string | null;
}