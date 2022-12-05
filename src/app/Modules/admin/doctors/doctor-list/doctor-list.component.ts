import { Doctors } from './../../../../models/doctors.model';
import { ActivatedRoute, ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { DoctorsService } from './../../../../services/doctors.service';

import { Component, ElementRef, Input, OnInit, TemplateRef, ViewChild } from '@angular/core';
//import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { FormBuilder, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DoctorEditAddComponent } from '../doctor-edit-add/doctor-edit-add.component';
import { Observable } from 'rxjs';
import { DoctorDetailsComponent } from '../doctor-details/doctor-details.component';
import { ImageResponse } from 'src/app/models/image-response';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-doctor-list',
  templateUrl: './doctor-list.component.html',
  styleUrls: ['./doctor-list.component.css'],
})
export class DoctorListComponent implements OnInit {
  fileToUpload: File | null = null;
  Imodel!: Doctors[];
  model = new Doctors();
  imagePath=new ImageResponse();
  filterDoctors!: Doctors[];
  dc: any;
  doctorName: string = "";
  addForm!: FormGroup;
  //@ViewChild('add') add!:ElementRef;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private doctorService: DoctorsService,
    private modalService: NgbModal,

  ){
    this.doctorService.getAll().subscribe(
      res=>this.Imodel=res
    )
   }
  

  ngOnInit(): void {
    this.doctorService.pegeTitleChange("doctorList")
    this.Imodel=this.route.snapshot.data['list']
    this.addForm = this.formBuilder.group({
      name: [""],
      gender: [""],
      address: [""],
      speciality: [""],
      tel: [""],
      email: [""],
      image: [""],
      experinece: [""],
    })
  }
  public onUpdateDoctor=(id: string) =>{
    // this.openUpdatePage();
    this.router.navigate(['admin/doctors/update/' + id])
  }
  public deleteDoctor=(id: string)=> {
    this.doctorService.delete(id).subscribe(
      (res: any) => {
        const index = this.Imodel.findIndex(x => x.id === id);
        this.Imodel.splice(index, 1);
      },
      (err: any) => console.log(err),
      () => console.log("observable is done")
    )
  }

  get filting(): string {
    return this.doctorService.filting
  }
  set filting(f: string) {
    this.doctorService.filting = f;

  }

  getall() {
    this.doctorService.getAll().subscribe(
      (Response: Doctors[]) => {
        this.Imodel = Response,
          this.filterDoctors = Response
      }
    );
    /* this.DService.getAll().subscribe({
       next:Doctors=>this.doctors=Doctors,
       error:err=>console.log(err)
     });*/
  }
 public filter=(name: string): void=> {
    // this.doctorName = name;
    this.doctorService.filting = name
    this.filterby(this.doctorName);
    console.log(this.doctorService.filting);

  }
  filterby(filterBy?: string): void {
    if (filterBy) {
      this.filterDoctors = this.Imodel.filter(
        x => x.name.toLocaleLowerCase().includes(filterBy)
      )
    }
    else {
      this.filterDoctors = this.Imodel;
    }

  }

  /***/
  prepardata() {
    this.model = this.addForm.value;
  }

  public update=(): void =>{
    this.prepardata();
    this.doctorService.update(this.model).subscribe(
      (res: any) => { alert("doctor is updated") },
      (err: any) => console.log(err),
      () => console.log("observable is done ")
    )
  }
  colse() {
    this.addForm.reset()
  }
 public updateDoctor=(id: string)=> {
    // const modalRef = this.modalService.open(this.add);
    const modalRef = this.modalService.open(DoctorEditAddComponent)
    modalRef.componentInstance.name = 'Edit'
    modalRef.componentInstance.id = id
  }
 public addDoctor=()=> {
    // const modalRef = this.modalService.open(this.add);
    const modalRef = this.modalService.open(DoctorEditAddComponent)
    modalRef.componentInstance.name = 'Add'
  }
  public showDoctor=(id: string):void=> {
    const modalRef = this.modalService.open(DoctorDetailsComponent)
    modalRef.componentInstance.name = 'Doctor information'
    modalRef.componentInstance.id = id
  }
  uploadImage=(event: any):void=>{
    this.imagePath.dbPath=event.dbPath();
  }
  getImageUrl(url:any){
    console.log(environment.imageurl+url)
    //return environment.imageurl+url
    return environment.imageurl+url
  }
  /*  catcherror(err:HttpErrorResponse):Observable<HttpEvent<Error>>{
     let newError=new Error();
     newError.message="jdbcjss";
     newError.status=100000;
      return throwError(err)
  
    }*/

  /* getdata() {
     /* this.h.getdoctors().subscribe((data) => (this.class = data))
 
     this.h.getdoctors().subscribe(
       // (response) => (this.model=response),
       (error: any) => console.log(error),
       () => console.log('done')
     );
   }
   postdata(d: any) {
     this.h.PostDoctor(d).subscribe((data) => (console.log(data)))
   }
 */
}
