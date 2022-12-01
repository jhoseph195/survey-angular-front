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

  public initials: string = '';
  public userName: string = '';

  ngOnInit(): void {
    this.selectedLang = sessionStorage.getItem('lang');

    this.userName = localStorage.getItem('user-name') || '';
    const userNameSplited = this.userName.split(' ');
    this.initials = ((userNameSplited[0] ? userNameSplited[0][0] : '') + (userNameSplited[1] ? userNameSplited[1][0] : '')).toUpperCase()
  }

  changeView(path: string) {
    this.router.navigate([path]);
  }
}
