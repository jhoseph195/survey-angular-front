import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public theme = {
    headerBgColor: '#00461457',
    headerTxtColor: '#d7d7d7',
    footerBgColor: '#00461457',
    footerTxtColor: '#d7d7d7',
    colorBgImage: 'linear-gradient(to bottom left,#eaeaeaed,#eaeaeaed)',
    clientBgImage: 'url(./assets/images/fondo-web.jpg)',
    clientLogoImage: '',
  }

  constructor(
    private router: Router,
  ) { }

  public selectedLang: string = '';

  ngOnInit(): void {
  }

  changeView() {
    this.router.navigate([`/panel`]);
  }
}
