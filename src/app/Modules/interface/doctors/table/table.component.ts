import { User } from 'src/app/Modules/interface/user';
import { Component, OnInit } from '@angular/core';
import { VirtualTimeScheduler } from 'rxjs';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HospitalDBService } from 'src/app/services/hospital-db.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  doctors: any;
  doctor: any;
  ds: any = "";

 

  
  url = "./assets/img/ali.png";
  dgroup = new FormGroup({
    doctorId: new FormControl(""),
    name: new FormControl(""),
    /*Validators.minLength(2) */
    gender: new FormControl(""),
    address: new FormControl(""),
    speciality: new FormControl(""),
    tel: new FormControl(""),
    email: new FormControl(""),
    image: new FormControl(""),
    experinece: new FormControl(""),

  });
  constructor(private h: HospitalDBService,private user:User
    
    ) {}
  
  //s:User[];
  ngOnInit(): void {
    this.getdoctors();
   // this.h.getall().subscribe(data => { this.s = data });
  }

  getdoctors(): void {
    this.h.getds().subscribe(
      response => {(this.doctors) = response,
      (error: any) => console.log(error),
      () => console.log('done')
      });
  }

  get(id: any) {
    this.h.getdoctor(id).subscribe(data => this.ds = data);
  }
  gettdoctor(id: any) {
    this.h.getdsd(id).subscribe(
      /*(res: User) => {
        const w = res;
        this.doctor = w.email; 
        console.log(w);
      }*/
     (response) => this.doctors = response,
      (error: any) => console.log(error),
      () => console.log('bittii')
      )
      this.getdoctors()
  }


  put(id: any, data: any) {
    this.h.putdoctor(id, data).subscribe(data => this.doctors = data);
  }
  post(data: any) {
    this.h.PostDoctor(data).subscribe(data => console.log(data));
    alert("is added")
    this.getdoctors()
  }

  /*************** */
  postdoctor(data: any) {
    this.h.Postds(data).subscribe(
      (response) => {this.doctors = response,
      (error: any) => console.log(error),
      () => console.log('bittii')
      })
    this.getdoctors()
  }
  /************/
  delete(id: any): void {
    this.h.DeleteDoctor(id).subscribe(
      (response) => this.getdoctors(),
      (error: any) => alert("The İD not "+console.log(error)),
      () => console.log('Deleted'));
  }
  imageupload(e: any) {
    var x = e.target.file[0];

  }

}
