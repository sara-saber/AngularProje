
import { environment } from './../../environments/environment.prod';
import { HomeComponent } from '../Modules/home/home.component';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { User } from '../Modules/interface/user';
@Injectable({
  providedIn: 'root'
})
export class HospitalDBService {
  private doctorurl = environment.url + '/Doctors';
  private departmenturl = environment.url + '/Department';
  constructor(private http: HttpClient) { }

  /* getall():Observable<doctors[]>{
     return this.http.get<doctors[]>(this.doctorurl);
   }
 
 getdoctorr():Observable<doctors>{
   return this.http.get<doctors>(this.doctorurl);
 }
 */

  getall() {
    return this.http.get(environment.url + '/Doctors')
  }
  // Doctor
  getds(): Observable<User[]> {
    const d = of(this.doctorurl)
    return this.http.get<User[]>(this.doctorurl);
  }
  // GET: api/Doctors
  getdoctors(): Observable<object> {
    const d = of(this.doctorurl)
    return this.http.get<object>(this.doctorurl);
  }
  // GET: api/Doctors/5
  getdoctor(id: number) {
    return this.http.get(this.doctorurl + '/' + id)
  }

  getdsd(id: number): Observable<User> {
    return this.http.get<User>(this.doctorurl + '/' + id)
  }

  // PUT: api/Doctors/5 (update)
  putdoctor(id: any, doctor: any) {
    return this.http.put(this.doctorurl + '/' + id, doctor)
  }

  // POST: api/Doctors

  PostDoctor(data: any) {
    return this.http.post(this.doctorurl, data)
  }
  Postds(data: any): Observable<User> {
    return this.http.post<User>(this.doctorurl, data)
  }
  // DELETE: api/Doctors/5
  DeleteDoctor(id: number): Observable<boolean> {
    return this.http.delete<boolean>(this.doctorurl + '/' + id)
  }
  dpostd(data: any) {
    return this.http.post(this.doctorurl + '/dfs', data);
  }

}
export class h {
  url = 'https://localhost:44308/api/Doctors';
  constructor(private http: HttpClient) { }

  /*getdb():Observable<data>{
    return this.http.get<data>(this.url);
  }*/
  postdb(data: any) {
    return this.http.post(this.url, data);
  }

}
