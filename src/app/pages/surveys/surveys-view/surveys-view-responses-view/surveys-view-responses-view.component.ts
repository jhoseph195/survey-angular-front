import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-surveys-view-responses-view',
  templateUrl: './surveys-view-responses-view.component.html',
  styleUrls: ['./surveys-view-responses-view.component.scss']
})
export class SurveysViewResponsesViewComponent implements OnInit {
  constructor(
    private router: Router,
  ) { }

  private LIST_PATH = 'panel/survey/view/responses/list';

  public survey: IScurvey = {
    title: 'Encuesta de satisfacción',
    idCompany: 1,
    companyName: 'Ikea',
    capturedBy: 'John Doe',
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    questions: [{
      question: '¿Que te gusto del servicio?',
      response: 'La atención al cliente',
      type: 'TEXT',
      isRequired: true,
      options: []
    }, {
      question: '¿Que no te gusto del servicio?',
      response: 'El tiempo de espera',
      type: 'TEXT',
      isRequired: true,
      options: []
    }, {
      question: '¿Qué tan satisfecho te encuentras?',
      response: 'Muy satisfecho',
      type: 'SELECT',
      isRequired: true,
      options: [
        { value: 'Muy satisfecho' },
        { value: 'Satisfecho' },
        { value: 'Poco satisfecho' }
      ]
    }, {
      question: 'Comentarios',
      response: 'Ninguno',
      type: 'TEXT',
      isRequired: false,
      options: []
    }]
  }

  public back() {
    this.changeView(this.LIST_PATH);
  }

  private changeView(path: string) {
    this.router.navigate([path]);
  }

  ngOnInit(): void {
  }
}

interface IScurvey {
  title: string | null;
  capturedBy: string | null;
  idCompany: number | null;
  companyName: string | null;
  description: string | null;
  questions: IQuestion[];
}

interface IQuestion {
  question: string | null;
  response: string | null;
  type: string | null;
  isRequired: boolean | null;
  options: IOptions[];
}

interface IOptions {
  value: string | null;
}