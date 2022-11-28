import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import packageJson from '../../../../package.json';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  public version = packageJson.version;
  public openedSize = '255px';
  public closedSize = '55px';
  
  public menu = [
    {
      icon: 'edit_document',
      text: 'Encuestas',
      translatedText: true,
      path: '/panel/survey'
    },
    {
      icon: 'apartment',
      text: 'Empresas',
      translatedText: true,
      path: '/panel/companys'
    }
  ];

  private selectedPath: string = '';

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
  
  ngDoCheck() {
    this.selectedPath = this.router.url;
  }

  checkPathSelected(path: string) {
    return this.selectedPath.includes(path);
  }

  changeView(route: string) {
    this.router.navigate([route]);
  }
}
