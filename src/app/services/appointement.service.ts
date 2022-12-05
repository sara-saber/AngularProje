import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { Appointement } from '../models/appointement';

@Injectable({
  providedIn: 'root'
})
export class AppointementService {

  constructor(private http:HttpClient) { }
  getAll(): Observable<Appointement[]> {
    return this.http.get<Appointement[]>("")
  }
  getById(ID:number):Observable<Appointement>{
    return this.http.get<Appointement>(""+ID)
  }
  add(Departments:Appointement):Observable<void>{
    return this.http.post<void>("",Departments)
  }
  delete(ID:number):Observable<void>{
    return this.http.delete<void>(""+ID)
  }
}
