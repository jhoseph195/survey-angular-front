import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AnswerService } from '../../../../services/answer.service';

@Component({
  selector: 'app-surveys-view-responses-list',
  templateUrl: './surveys-view-responses-list.component.html',
  styleUrls: ['./surveys-view-responses-list.component.scss']
})
export class SurveysViewResponsesListComponent implements OnInit {

  private surveyId; 

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private answerService: AnswerService,
  ) {
    this.surveyId = this.route.snapshot.queryParamMap.get('survey');
  }

  private VIEW_PATTH = '/panel/survey/view/responses/view';

  public data = null;
  public total = 0;
  
  ngOnInit(): void {
  }

  view(id: Number) {
    this.changeView(this.VIEW_PATTH, {survey: id});
  }

  getData(filters: any) {
    filters.surveyId = this.surveyId;
    
    this.answerService.getWithFilters(filters).subscribe((result: any) => {
      this.data = result.data;
      this.total = result.count;
    });
  }

  changeView(path: string, data?: any) {
    if (data) {
      this.router.navigate([path], { queryParams: data});
    } else {
      this.router.navigate([path]);
    }
  }
}
