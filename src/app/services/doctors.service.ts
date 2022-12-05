
import { Doctors } from 'src/app/models/doctors.model';

import { BehaviorSubject, catchError, Observable, tap, of, map } from 'rxjs';
import { HttpClient, HttpContext, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { content_type } from './headers.interceptor';
import { cachable } from './cache.interceptor';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class DoctorsService implements Resolve<Doctors[]>{
  private url=environment.url;
  filting: string = "";
  private model!:Doctors[]; 


  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Doctors[]> {
    return this.getAll()
  }
  //get page title 
  private p:BehaviorSubject<string>=new BehaviorSubject("Dashboard");
  pageTitle=this.p.asObservable();
  pegeTitleChange(title:string){
    this.p.next(title)
  }
  get Title(){
    return this.pageTitle;
  }

  //change selected 
 /* private s = new BehaviorSubject<Doctors | null>(null);
  selectedChange$ = this.s.asObservable();
  selectedchange(doctor: Doctors) {
    this.s.next(doctor);
  }*/
  //private Doctors:Doctor[]=[];
  constructor(private http: HttpClient) { }

  getAll(): Observable<Doctors[]> {
    return this.http.get<Doctors[]>(this.url+'/doctors',{
      context:new HttpContext().set(content_type,'application/xml').set(cachable,true)
    }).pipe(
     tap(data => console.log(data)),
    );
  }
  getById(id: string): Observable<Doctors> {
    if(this.model){
      const item=this.model.find(x=>x.id===id);
      if(item){
        return of(item)
      }
    }
    return this.http.get<Doctors>(this.url+"/doctors/" + id,{
      context:new HttpContext().set(content_type,'application/json').set(cachable,false)
    }).pipe(
      tap(x=>console.log(x))
    );
  }

  addDoctor(doctor: Doctors):Observable<void> {
    return this.http.post<void>(environment.url +'/doctors/', doctor)
  }
  update(doctor: Doctors):Observable<void>{
    return this.http.put<void>(environment.url + '/doctors/'+doctor.id ,doctor)
  }
  delete(id: string):Observable<void>{
    return this.http.delete<void>(environment.url + '/doctors/'+id)
  }
}
