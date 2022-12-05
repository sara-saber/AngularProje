
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, NgModel, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { UploadComponent } from './upload/upload.component';



@NgModule({
  declarations: [
    SearchComponent,
    UploadComponent
  ],
  imports: [
    CommonModule,
    FormsModule,

  ],
  exports:[
    SearchComponent,
    UploadComponent,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
    
  ]
})
export class SharedModule { }
