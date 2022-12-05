import { ActivatedRoute, Router } from '@angular/router';

import { DoctorsService } from './../../../../services/doctors.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, EmailValidator } from '@angular/forms';
import { Doctors } from 'src/app/models/doctors.model';
import { ImageResponse } from 'src/app/models/image-response';
//import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-doctor-add',
  templateUrl: './doctor-add.component.html',
  styleUrls: ['./doctor-add.component.css']
})
export class DoctorAddComponent implements OnInit {
  model!: Doctors;
  pageTitle!: string;
  imagePath = new ImageResponse();

  // doctors: any;
  // doctor: any;
  // ds: any = "";
  // url = "./assets/img/ali.png";
  addForm!: FormGroup


  /* dgroup = new FormGroup({
     doctorId: new FormControl("n"),
     name: new FormControl(""),
     Validators.minLength(2) 
     gender: new FormControl(""),
     address: new FormControl(""),
     speciality: new FormControl(""),
     tel: new FormControl(""),
     email: new FormControl(""),
     image:[""],
     experinece:"",
   });
  /*var model=new User();
  this.model.username=thid.doctorname;
  */


  constructor(
    private formBuilder: FormBuilder,
    private Service: DoctorsService,
    private route: ActivatedRoute,
    private router: Router,
  ) {
    /* this.h.getdoctors().subscribe((data) => { this.doctor = data })*/
  }
  /* openDialog(){
     this.DialogRef.open(DoctorDetailsComponent)
     
   }*/
  ngOnInit(): void {
    this.Service.pegeTitleChange("doctorAdd")
    // this.pageTitle=this.route.snapshot.data['titlepage'];

    this.addForm = this.formBuilder.group({
      name: [null, Validators.required],
      gender: [null, Validators.required],
      address: [null, Validators.required],
      speciality: [null, Validators.required],
      tel: [null, Validators.required],
      email: [null, Validators.required],
      image: [null,Validators.required],
      experinece: [null, Validators.required],
    })
  }
  prepardata() {
    this.model = this.addForm.value
    this.model.image=this.imagePath.dbPath
  }
  save(): void {
    this.prepardata();
    this.Service.addDoctor(this.model).subscribe(
      (res: any) => { console.log("New doctor add"), this.router.navigate(['admin/doctors/list']) },
      (err: any) => { console.log("have account on same email"), this.addForm.controls['email'].reset() },
      () => console.log("observable is done ")
    )
  }
  uploadImage = (event: any): void => {
    this.imagePath.dbPath = event.dbPath
  }
  /* getdoctors(): void {
     this.h.getds().subscribe(
       (response: User[]) => {
         (this.doctors) = response,
           (error: any) => console.log(error),
           () => console.log('done')
       });
   }
 
   get(id: any) {
     this.h.getdoctor(id).subscribe(data => this.ds = data);
   }
   gettdoctor(id: any) {
     this.h.getdsd(id).subscribe(
       (response) => this.doctors = response,
       (error: any) => console.log(error),
       () => console.log('bittii')
     )
     this.getdoctors()
   }
   //model:slider [] this.model=xs
 
   put(id: any, data: any) {
     this.h.putdoctor(id, data).subscribe(data => this.doctors = data);
   }
   post(data: any) {
     this.Service.addDoctor(data).subscribe();
     alert("add")
     this.getdoctors()
   }
 
 
   postdoctor(data: any) {
     this.h.Postds(data).subscribe(
       (response) => this.doctors = response,
       (error: any) => console.log(error),
       () => console.log('bittii')
     )
     this.getdoctors()
 
   }
 
   delete(id: any): void {
     this.h.DeleteDoctor(id).subscribe(
       (response) => this.getdoctors(),
       (error: any) => alert("The İD not " + console.log(error)),
       () => console.log('Deleted'));
   }
   imageupload(e: any) {
     var x = e.target.file[0];
 
   }*/

}
