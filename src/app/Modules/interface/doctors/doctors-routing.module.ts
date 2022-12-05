import { TableComponent } from './table/table.component';
import { CardComponent } from './card/card.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'card',
    component:CardComponent
  },
  {
    path:'table',
    component:TableComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DoctorsRoutingModule { }
