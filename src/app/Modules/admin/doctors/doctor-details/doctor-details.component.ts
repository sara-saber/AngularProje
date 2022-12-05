import { DoctorsService } from './../../../../services/doctors.service';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctors } from 'src/app/models/doctors.model';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-doctor-details',
  templateUrl: './doctor-details.component.html',
  styleUrls: ['./doctor-details.component.css']
})
export class DoctorDetailsComponent implements OnInit {
  name!:string
  id:string=""
  model:Doctors=new Doctors();
  constructor(public activeModal: NgbActiveModal,private route:ActivatedRoute,private doctorService:DoctorsService) { }

  ngOnInit(): void {
    this.doctorService.getById(this.id).subscribe(
      (res)=>this.model=res
    )
  }
}
