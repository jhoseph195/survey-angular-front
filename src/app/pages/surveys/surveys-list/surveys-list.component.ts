import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-surveys-list',
  templateUrl: './surveys-list.component.html',
  styleUrls: ['./surveys-list.component.scss']
})
export class SurveysListComponent implements OnInit {
  constructor(
    private router: Router,
  ) { }

  private ADD_PATTH = '/panel/survey/add';
  private EDIT_PATTH = '/panel/survey/edit';
  private VIEW_PATTH = '/panel/survey/view';

  public data = [
    {
      id: 1,
      title: 'Encuesta de satisfacción',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      company: 'Ikea',
    }, {
      id: 2,
      title: 'Encuesta para evaluación de candidato',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      company: 'Lego',
    }, {
      id: 3,
      title: 'Encuesta de producto',
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
      company: 'Coca Cola',
    }
  ]

  ngOnInit(): void {
  }

  
  add() {
    this.changeView(this.ADD_PATTH);
  }

  view(id: Number) {
    this.changeView(this.VIEW_PATTH, {survey: id});
  }

  edit(id: Number) {
    this.changeView(this.EDIT_PATTH, {survey: id});
  }
  
  delete(id: Number) {
    
  }

  changeView(path: string, data?: any) {
    if (data) {
      this.router.navigate([path], { queryParams: data});
    } else {
      this.router.navigate([path]);
    }
  }
}
