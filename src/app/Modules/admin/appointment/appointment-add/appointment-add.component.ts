import { Departments } from './../../../../models/departments';
import { DepartmentService } from './../../../../services/department.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { DoctorsService } from 'src/app/services/doctors.service';
import { Doctors } from 'src/app/models/doctors.model';

@Component({
  selector: 'app-appointment-add',
  templateUrl: './appointment-add.component.html',
  styleUrls: ['./appointment-add.component.css']
})
export class AppointmentAddComponent implements OnInit {

  Idepartment: Departments[] = []
  Idoctor: Doctors[] = []
  list!: number[]
  constructor(private route: ActivatedRoute, private doctorService: DoctorsService, private departmentService: DepartmentService) { }

  ngOnInit(): void {
    //get all department
    this.Idepartment = this.route.snapshot.data['data'];

    //get all doctors

  }
  selectDepartment($event: any) {
    //get doctor which have the same department id but must get all doctors in ngOnInıt
    console.log("the answer is:" + $event.target.value)
    this.doctorService.getAll().subscribe(x =>
      this.Idoctor = x.filter(x => x.id == $event.target.value))
    }

}
