import { DepartmentListResolver } from './../../../resolvers/department-list.resolver';
import { AppointmentAddComponent } from './appointment-add/appointment-add.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppointmentListComponent } from './appointment-list/appointment-list.component';
import { AppointmentComponent } from './appointment.component';
import { AppointementService } from 'src/app/services/appointement.service';

const routes: Routes = [
  {
    path:'',
    component:AppointmentComponent
  },
  {
    path:'add',
    component:AppointmentAddComponent,
    resolve:{data:DepartmentListResolver}
  },
  {
    path:'list',
    component:AppointmentListComponent,
    resolve:{data:DepartmentListResolver}
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppointmentRoutingModule { }
