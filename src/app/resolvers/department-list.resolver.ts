import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';
import { Departments } from '../models/departments';
import { DepartmentService } from '../services/department.service';

@Injectable({
  providedIn: 'root'
})
export class DepartmentListResolver implements Resolve<Departments[]> {
  constructor(private S:DepartmentService){}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Departments[]> {
    return this.S.getAll();
  }
}
