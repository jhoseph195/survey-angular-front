import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @Input() total: number = 0;
  @Input() showButton: boolean = true;
  @Input() showSearch: boolean = true;
  @Input() showPagination: boolean = true;
  @Input() searchTitle: string = '';
  @Input() searchPlaceholder: string = '';
  @Input() buttonBgColor: string = '';
  @Input() buttonTextColor: string = '';
  @Input() buttonText: string = '';
  @Input() buttonIcon: string = '';
  @Input() noRecordsText: string = '';
  @Output() change = new EventEmitter<any>();
  @Output() btnClicked = new EventEmitter<any>();
  constructor() { }

  ngOnInit(): void {
  }

}
