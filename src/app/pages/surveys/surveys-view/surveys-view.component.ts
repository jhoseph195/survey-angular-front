import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-surveys-view',
  templateUrl: './surveys-view.component.html',
  styleUrls: ['./surveys-view.component.scss']
})
export class SurveysViewComponent implements OnInit {

  private surveyId; 

  constructor(
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.surveyId = this.route.snapshot.queryParamMap.get('survey');
  }
  private LIST_PATH = '/panel/survey';
  private INFO_PATH = '/panel/survey/view/info';
  private RESPONSES_PATH = '/panel/survey/view/responses/list';

  public back() {
    this.changeView(this.LIST_PATH);
  }

  public tabClicked($even: any) {
    switch ($even.index) {
      case 0:
        this.changeView(this.INFO_PATH, { survey: this.surveyId });
        break;
      case 1:
        this.changeView(this.RESPONSES_PATH, { survey: this.surveyId });
        break;
      default:
        break;
    }
  }

  public changeView(path: string, data?: any) {
    if (data) {
      this.router.navigate([path], { queryParams: data });
    } else {
      this.router.navigate([path]);
    }
  }

  ngOnInit(): void {
  }
}
