import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { TranslateModule } from '@ngx-translate/core';
import { MiniButtonComponent } from './mini-button/mini-button.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    TableComponent,
    MiniButtonComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    MatPaginatorModule,
    MatButtonModule,
    MatInputModule,
    MatIconModule,
    TranslateModule
  ],
  exports: [
    TableComponent,
    MiniButtonComponent,
    TranslateModule
  ],
})
export class SharedModule { }
