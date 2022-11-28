import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { PanelComponent } from './panel/panel.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatRippleModule } from '@angular/material/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatTooltipModule } from '@angular/material/tooltip';
import { TranslateModule } from '@ngx-translate/core';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    LoginComponent,
    PanelComponent,
    SidebarComponent,
    TopbarComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    MatGridListModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatRippleModule,
    MatBadgeModule,
    MatMenuModule,
    MatSidenavModule,
    MatTooltipModule,
    TranslateModule,
    MatSlideToggleModule,
    MatDividerModule,
    MatPaginatorModule,
    MatInputModule,
  ],
  exports: [
    LoginComponent,
    PanelComponent,
    SidebarComponent,
    TopbarComponent,
    TranslateModule
  ],
})
export class CoreModule { }
