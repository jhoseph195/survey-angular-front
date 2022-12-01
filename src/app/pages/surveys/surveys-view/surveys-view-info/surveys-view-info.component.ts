import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { SurveyService } from '../../../../services/survey.service';

@Component({
  selector: 'app-surveys-view-info',
  templateUrl: './surveys-view-info.component.html',
  styleUrls: ['./surveys-view-info.component.scss']
})
export class SurveysViewInfoComponent implements OnInit {

  private surveyId; 

  constructor(
    private route: ActivatedRoute,
    private surveyService: SurveyService,
  ) {
    this.surveyId = this.route.snapshot.queryParamMap.get('survey');
  }
  
  public survey: any = {
    title: '',
    description: '',
    company: {
      id: 0,
      socialReason: ''
    },
    format: []
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.surveyService.getById(Number(this.surveyId)).subscribe((response: any) => {
      this.survey = response.data;
    });
  }

}

interface IScurvey {
  title: string | null;
  idCompany: number | null;
  companyName: string | null;
  description: string | null;
  questions: IQuestion[];
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