import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctors } from 'src/app/models/doctors.model';
import { DoctorsService } from 'src/app/services/doctors.service';

@Component({
  selector: 'app-doctor-page',
  templateUrl: './doctor-page.component.html',
  styleUrls: ['./doctor-page.component.css']
})
export class DoctorPageComponent implements OnInit {

  constructor(private route:ActivatedRoute,private dservices:DoctorsService,private router:Router) { }
  doctor=new Doctors();
  ngOnInit(): void {
    this.observable();
  //  this.snapshot();
    }
    snapshot(){
       //const id=Number(this.router.snapshot.paramMap.get('id'));
    this.dservices.getById(String(this.route.snapshot.paramMap.get('id'))).subscribe(x=>this.doctor=x);
    }
    observable(){
    // const id= this.route.paramMap.subscribe(p=>p.get('id'));
    this.route.paramMap.subscribe((p)=>
    {
      this.doctor.id=String(p.get('id'));
      this.dservices.getById(this.doctor.id).subscribe(x=>this.doctor=x);
    })
   //  console.log("doctor id:"+this.doctor.doctorId);
    }
    onback(){
      this.router.navigate(['admin/doctors/list']);
    }
}
