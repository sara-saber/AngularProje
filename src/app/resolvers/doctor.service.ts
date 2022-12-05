import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { Doctors } from '../models/doctors.model';
import { DoctorsService } from '../services/doctors.service';

@Injectable({
  providedIn: 'root'
})
export class DoctorService implements Resolve<Doctors> {

  constructor(private doctorsService:DoctorsService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):Observable<Doctors> {  
    return this.doctorsService.getById(String(route.paramMap.get('id')))
  }
}
