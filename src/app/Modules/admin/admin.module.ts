import { DoctorListComponent } from './doctors/doctor-list/doctor-list.component';
import { DoctorAddComponent } from './doctors/doctor-add/doctor-add.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule ,ReactiveFormsModule} from '@angular/forms';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { DoctorDetailsComponent } from './doctors/doctor-details/doctor-details.component';
import { SharedModule } from '../shared/shared.module';
import { DoctorUpdateComponent } from './doctors/doctor-update/doctor-update.component';
import { UsersComponent } from './users/users.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { AppointmentListComponent } from './appointment/appointment-list/appointment-list.component';
import { AppointmentAddComponent } from './appointment/appointment-add/appointment-add.component';
import { DepartmentsComponent } from './departments/departments.component';
import { DepartmentAddComponent } from './departments/department-add/department-add.component';
import { DepartmentListComponent } from './departments/department-list/department-list.component';
import { DoctorEditAddComponent } from './doctors/doctor-edit-add/doctor-edit-add.component';
import { DoctorPageComponent } from './doctors/doctor-page/doctor-page.component';

@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    DoctorsComponent,
    DoctorListComponent,
    DoctorAddComponent,
    DoctorDetailsComponent,
    DoctorUpdateComponent,
    UsersComponent,
    AppointmentComponent,
    AppointmentListComponent,
    AppointmentAddComponent,
    DepartmentsComponent,
    DepartmentAddComponent,
    DepartmentListComponent,
    DoctorEditAddComponent,
    DoctorPageComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    FormsModule,
    SharedModule,
    ReactiveFormsModule,
  ]
})
export class AdminModule { }
