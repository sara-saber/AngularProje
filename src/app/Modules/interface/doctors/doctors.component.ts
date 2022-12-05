import { HospitalDBService } from 'src/app/services/hospital-db.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  doctors: any;
  c: any;

  constructor(private h: HospitalDBService) {
  }
  getdata() {
    this.h.getdoctors().subscribe((data) => (this.doctors = data))
  }
  postdata(d: any) {
    this.h.PostDoctor(d).subscribe((data) => (console.log(data)))
  }

  ngOnInit(): void {
    this.getdata();
  }

  f() {

  }
}
