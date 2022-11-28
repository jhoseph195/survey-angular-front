import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-surveys-view-responses-list',
  templateUrl: './surveys-view-responses-list.component.html',
  styleUrls: ['./surveys-view-responses-list.component.scss']
})
export class SurveysViewResponsesListComponent implements OnInit {

  private surveyId; 

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.surveyId = this.route.snapshot.queryParamMap.get('survey');
  }

  private VIEW_PATTH = '/panel/survey/view/responses/view';

  public data = [
    {
      id: 1,
      title: 'Encuesta de satisfacción',
      capturedBy: 'John Doe',
      date: '2022-11-03 15:23',
    }, {
      id: 2,
      title: 'Encuesta de satisfacción',
      capturedBy: 'Joseph Gómez',
      date: '2022-11-05 15:23',
    }, {
      id: 3,
      title: 'Encuesta de satisfacción',
      capturedBy: 'Carlos Velzco',
      date: '2022-11-06 15:23',
    }
  ]

  ngOnInit(): void {
  }

  view(id: Number) {
    this.changeView(this.VIEW_PATTH, {survey: id});
  }

  changeView(path: string, data?: any) {
    if (data) {
      this.router.navigate([path], { queryParams: data});
    } else {
      this.router.navigate([path]);
    }
  }
}
