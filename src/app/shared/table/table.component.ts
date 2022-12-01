import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {
  @ViewChild('filterFind') yourElement: ElementRef | undefined;

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
  @Output() changeFilters = new EventEmitter<any>();
  @Output() btnClicked = new EventEmitter<any>();
  constructor() { }

  public filter: string = '';
  public page: number = 0;
  public limit: number = 10;

  private timer = 0;
  private time = 500;

  ngOnInit(): void {
    this.emitChange();
  }

  onFilter(event: any) {
      this.timer += this.time;

      setTimeout(() => {
        this.timer -= this.time;

        this.timer = (this.timer < 0 ? 0 : this.timer)

        if (this.timer == 0) {
          this.emitChange();
        }
      }, this.time);
  }
  
  handlePageEvent(e: PageEvent) {
    this.limit = e.pageSize;
    this.page = e.pageIndex;

    this.emitChange();
  }

  emitChange() {
    this.changeFilters.emit({
      filter: this.filter,
      page: this.page + 1,
      limit: this.limit,
    });
  }
}
