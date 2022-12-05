import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Doctors } from 'src/app/models/doctors.model';
import { ImageResponse } from 'src/app/models/image-response';
import { DoctorsService } from 'src/app/services/doctors.service';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-doctor-edit-add',
  templateUrl: './doctor-edit-add.component.html',
  styleUrls: ['./doctor-edit-add.component.css']
})
export class DoctorEditAddComponent implements OnInit {

  name!:string
  id:string=""
  doctor=new Doctors();
  modelForm!:FormGroup;
  imagePath=new ImageResponse();
  constructor(public activeModal: NgbActiveModal,private route:ActivatedRoute,private doctorService:DoctorsService,private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    if(this.id!='')
    {
    this.doctorService.getById(this.id).subscribe(
      (res)=>{this.doctor=res,
        this.modelForm=this.formBuilder.group({
          name: [this.doctor.name],
          gender: [this.doctor.gender],
          address: [this.doctor.address],
          speciality: [this.doctor.speciality],
          tel: [this.doctor.tel],
          email: [this.doctor.email],
          image: [this.doctor.image],
          experinece: [this.doctor.experinece],
        })}
    )
   
    }
    else{
    this.modelForm=this.formBuilder.group({
      name: [""],
      gender: [""],
      address: [""],
      speciality: [""],
      tel: [""],
      email:[""],
      image: [""],
      experinece: [""],
    })
  }
  }

  prepareData(){
   this.doctor=this.modelForm.value
   this.doctor.image=this.imagePath.dbPath

  }
  public save=(): void=>{
    this.prepareData();
    this.doctorService.addDoctor(this.doctor).subscribe(
      (res:any)=>{alert("doctor is added"),console.log("New doctor add"), this.modelForm.reset()},
      (err:any)=>console.log(err),
      ()=>console.log("observable is done ")
    )
  }

  update(){
   this.prepareData();
    this.doctorService.update(this.doctor).subscribe(
      (res:any)=>alert("updated"),
      (err:any)=>console.log(err),
      ()=>console.log("observable is done")
    )
 
  }
  getImageUrl(url:any){
    console.log(environment.imageurl+url)
    //return environment.imageurl+url
    return environment.imageurl+url
  }
  uploadImage=(event: any):void=>{
    this.imagePath.dbPath=event.dbPath();
  }
}
