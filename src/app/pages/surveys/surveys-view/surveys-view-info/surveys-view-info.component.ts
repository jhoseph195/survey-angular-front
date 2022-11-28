import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-surveys-view-info',
  templateUrl: './surveys-view-info.component.html',
  styleUrls: ['./surveys-view-info.component.scss']
})
export class SurveysViewInfoComponent implements OnInit {

  private surveyId; 

  constructor(
    private route: ActivatedRoute
  ) {
    this.surveyId = this.route.snapshot.queryParamMap.get('survey');
  }
  
  public survey: IScurvey = {
    title: 'Encuesta de satisfacción',
    idCompany: 1,
    companyName: 'Ikea',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    questions: [{
      question: '¿Que te gusto del servicio?',
      type: 'TEXT',
      isRequired: true,
      options: []
    }, {
      question: '¿Que no te gusto del servicio?',
      type: 'TEXT',
      isRequired: true,
      options: []
    }, {
      question: '¿Qué tan satisfecho te encuentras?',
      type: 'SELECT',
      isRequired: true,
      options: [
        { value: 'Muy satisfecho' },
        { value: 'Satisfecho' },
        { value: 'Poco satisfecho' }
      ]
    }, {
      question: 'Comentarios',
      type: 'TEXT',
      isRequired: false,
      options: []
    }]
  }

  ngOnInit(): void {
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