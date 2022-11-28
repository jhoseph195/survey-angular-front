import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-surveys-form',
  templateUrl: './surveys-form.component.html',
  styleUrls: ['./surveys-form.component.scss']
})
export class SurveysFormComponent implements OnInit {
  public surveyId; 

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.surveyId = this.route.snapshot.queryParamMap.get('survey');
  }

  private LIST_PATH = 'panel/survey/';

  public survey: IScurvey = {
    title: null,
    idCompany: null,
    description: null,
    questions: []
  }

  public back() {
    this.changeView(this.LIST_PATH);
  }

  public save() {
    console.log(JSON.stringify(this.survey))
    this.changeView(this.LIST_PATH);
  }
  
  public removeElement(data: any, index: number) {
    data.splice(index, 1);
  }

  public addQuestion() {
    this.survey.questions.push({
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

  ngOnInit(): void {
  }

}

interface IScurvey {
  title: string | null;
  idCompany: number | null;
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