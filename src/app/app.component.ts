import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(
    private translate: TranslateService
  ) {
    this.translate.setDefaultLang('en');
    this.setAppLanguage();
  }

  title = 'survey';

  setAppLanguage() {
    const tempLang = sessionStorage.getItem('lang');

    if (tempLang) {
      this.translate.use(tempLang);
    }

    if (!tempLang) {
      const browserLang = this.translate.getBrowserLang();

      this.translate.use(browserLang ? browserLang : this.translate.getDefaultLang());
      sessionStorage.setItem('lang', browserLang ? browserLang : this.translate.getDefaultLang() );
    }
  }
}
