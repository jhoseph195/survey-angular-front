import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SurveyService } from '../../../services/survey.service';

@Component({
  selector: 'app-surveys-list',
  templateUrl: './surveys-list.component.html',
  styleUrls: ['./surveys-list.component.scss']
})
export class SurveysListComponent implements OnInit {
  constructor(
    private router: Router,
    private surveyService: SurveyService,
  ) { }

  private ADD_PATTH = '/panel/survey/add';
  private EDIT_PATTH = '/panel/survey/edit';
  private VIEW_PATTH = '/panel/survey/view';

  public data = null;
  public total = 0;
  
  public filters = {};


  ngOnInit(): void {
  }

  getData(filters: any) {
    this.filters = filters;
    this.surveyService.getWithFilters(filters).subscribe((result: any) => {
      this.data = result.data;
      this.total = result.count;
    });
  }
  
  add() {
    this.changeView(this.ADD_PATTH);
  }

  view(id: number) {
    this.changeView(this.VIEW_PATTH, {survey: id});
  }

  edit(id: number) {
    this.changeView(this.EDIT_PATTH, {survey: id});
  }
  
  delete(id: number) {
    this.surveyService.delete(id).subscribe((result: any) => {
      this.getData(this.filters);
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
