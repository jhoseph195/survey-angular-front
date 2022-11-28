import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-mini-button',
  templateUrl: './mini-button.component.html',
  styleUrls: ['./mini-button.component.scss']
})
export class MiniButtonComponent implements OnInit {

  constructor() { }

  @Input() type: number = 1;
  @Input() class: string = '';
  @Input() onlyView: boolean = false;
  @Output() btnClicked = new EventEmitter<any>();

  public min = 1;
  public max = 5;

  public buttons = [
    {
      text: 'Ver',
      icon: 'visibility',
      class: 'view'
    }, {
      text: 'Editar',
      icon: 'edit',
      class: 'edit'
    }, {
      text: 'Eliminar',
      icon: 'delete',
      class: 'delete'
    }
  ];

  clickButton() {
    this.btnClicked.emit();
  }

  ngOnInit() {
  }

}
