
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Departments } from '../models/departments';

@Injectable({
  providedIn: 'root'
})
export class DepartmentService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Departments[]> {
    return this.http.get<Departments[]>("https://630c663753a833c53429c2d5.mockapi.io/role")
  }
  getById(ID:number):Observable<Departments>{
    return this.http.get<Departments>("https://630c663753a833c53429c2d5.mockapi.io/role"+ID)
  }
  add(Departments:Departments):Observable<void>{
    return this.http.post<void>("",Departments)
  }
  delete(ID:number):Observable<void>{
    return this.http.delete<void>(""+ID)
  }
}
