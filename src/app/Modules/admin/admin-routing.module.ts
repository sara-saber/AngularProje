import { DoctorListComponent } from './doctors/doctor-list/doctor-list.component';

import { DoctorsComponent } from './../admin/doctors/doctors.component';
import { DoctorAddComponent } from './doctors/doctor-add/doctor-add.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from '../login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorDetailsComponent } from './doctors/doctor-details/doctor-details.component';
import { DoctorUpdateComponent } from './doctors/doctor-update/doctor-update.component';
import { DoctorEditAddComponent } from './doctors/doctor-edit-add/doctor-edit-add.component';
import { DoctorsService } from 'src/app/services/doctors.service';
import { DoctorService } from 'src/app/resolvers/doctor.service';
import { DoctorPageGuard } from './doctors/doctor-page/doctor-page.guard';

const routes: Routes = [
{
  path:'login',
  data:{titlepage:'Login'},
  component:LoginComponent
},
{
  path:'dashboard',
  data:{titlepage:'Dashboard'},
  component:DashboardComponent
},
{
  path:'',
  redirectTo:'dashboard',pathMatch:'full'
},
/*{
  path:'**',//rout name not found
  component:DashboardComponent
},*/
{
  path:'appointment',
  loadChildren:()=>
    import('./appointment/appointment.module').then(m=>m.AppointmentModule)
},
{
  path:'doctors',
  data:{titlepage:'safsdcs'},
  children:[
    {
      path:'',
      component:DoctorsComponent,
    },
    {
      path:'list',
      component:DoctorListComponent,
      resolve:{list:DoctorsService}
    },
    {
      path:'add',
      component:DoctorAddComponent,
    },
    {
      path:'addedit',
      component:DoctorEditAddComponent,
    },
    {
      path:'details/:id',
      component:DoctorDetailsComponent,
      canActivate:[DoctorPageGuard]
    },
    {
      path:'update/:id',
      component:DoctorUpdateComponent,
      resolve:{doctor:DoctorService},
    }
  ]
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
