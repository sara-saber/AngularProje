import { MatIconModule } from '@angular/material/icon';
import { MatSliderModule } from '@angular/material/slider';
import { MatMenuModule } from '@angular/material/menu';
import { DoctorsComponent } from './doctors.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TableComponent } from './table/table.component';
import { CardComponent } from './card/card.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DoctorsRoutingModule } from './doctors-routing.module';


@NgModule({
  declarations: [
    CardComponent,
    TableComponent,
    DoctorsComponent
  ],
  imports: [
    CommonModule,
    DoctorsRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatMenuModule,
    MatSliderModule,
    MatIconModule,
  ]
})
export class DoctorsModule { }
