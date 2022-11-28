import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  constructor(
    private router: Router,
  ) { }

  public selectedLang: string | null = '';

  ngOnInit(): void {
    this.selectedLang = sessionStorage.getItem('lang');
  }
  
  changeView(path: string) {
    this.router.navigate([path]);
  }
}
