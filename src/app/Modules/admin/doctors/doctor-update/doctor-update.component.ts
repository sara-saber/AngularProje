import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

import { DoctorDetailsComponent } from './../doctor-details/doctor-details.component';
import { Component, OnInit } from '@angular/core';
import { DoctorsService } from 'src/app/services/doctors.service';
import { Doctors } from 'src/app/models/doctors.model';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-doctor-update',
  templateUrl: './doctor-update.component.html',
  styleUrls: ['./doctor-update.component.css']
})
export class DoctorUpdateComponent implements OnInit {
  doctor = new Doctors();
  updateGroup!: FormGroup;
  constructor(
    private route: ActivatedRoute, 
    private doctorService: DoctorsService, 
    private formBuilder: FormBuilder,
    private router:Router) { }

  ngOnInit(): void {
    this.doctor = this.route.snapshot.data['doctor'];
    this.updateGroup = this.formBuilder.group({
      name: [this.doctor.name],
      gender: [this.doctor.gender],
      address: [this.doctor.address],
      speciality: [this.doctor.speciality],
      tel: [this.doctor.tel],
      email: [this.doctor.email],
      image: [this.doctor.image],
      experinece: [this.doctor.experinece],

    })
  }
  prepareData() {
    this.doctor = this.updateGroup.value;
    this.doctor.id=this.route.snapshot.data['doctor'].id
  }
  update() {
    this.router.navigate(['admin/doctors/list'])
    this.prepareData();
    this.doctorService.update(this.doctor).subscribe(
      (res: any) => {this.router.navigate(['admin/doctors/list'])},
      (err: any) => console.log(err),
      () => console.log("observable is done")
    )
  }

}
