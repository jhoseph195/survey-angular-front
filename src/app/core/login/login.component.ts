import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

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
    private authService: AuthService,
  ) { }

  public selectedLang: string = '';

  public email: string = '';
  public password: string = '';

  ngOnInit(): void {
  }

  login() {
    const data = {
      email: this.email,
      password: this.password,
      origin: 'WEB'
    };

    this.authService.login(data).subscribe((result: any) => {
      localStorage.setItem('auth-token', result.data.token);
      localStorage.setItem('user-id', result.data.id);
      localStorage.setItem('user-name', result.data.name);
      localStorage.setItem('user-type', result.data.type);

      this.router.navigate([`/panel`]);
    });
  }
}
