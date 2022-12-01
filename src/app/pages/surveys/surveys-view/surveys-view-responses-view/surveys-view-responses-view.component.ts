import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AnswerService } from '../../../../services/answer.service';

@Component({
  selector: 'app-surveys-view-responses-view',
  templateUrl: './surveys-view-responses-view.component.html',
  styleUrls: ['./surveys-view-responses-view.component.scss']
})
export class SurveysViewResponsesViewComponent implements OnInit {
  private surveyId;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private answerService: AnswerService,
  ) {
    this.surveyId = this.route.snapshot.queryParamMap.get('survey');
  }

  private LIST_PATH = 'panel/survey/view/responses/list';

  public survey = {
    survey: {
      title: '',
      description: '',
      company: {
        socialReason: '',
      },
    },
    user: {
      name: '',
    },
    format: null
  }

  public back() {
    this.changeView(this.LIST_PATH);
  }

  private changeView(path: string) {
    this.router.navigate([path], { queryParams: {survey: this.surveyId}});
  }

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.answerService.getById(Number(this.surveyId)).subscribe((response: any) => {
      this.survey = response.data;
    });
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