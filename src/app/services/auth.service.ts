import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment.prod';
import { Users } from '../models/users';


const AUTH_API = environment.url+'/users';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) { }
  
  getAll(): Observable<Users[]> {
    return this.http.get<Users[]>(AUTH_API).pipe(
      tap(data => console.log(data))
    );
  }
  login=(user:Users): Observable<Users> => {
    return this.http.post<Users>(AUTH_API+'/login/',user)
  }
  signUp=(user: Users): Observable<Users>=> {
    return this.http.post<Users>(AUTH_API, {
      user},
      httpOptions)
  }
  isLoggedIn=(): boolean =>{
    const token = localStorage.getItem('token');
    if (token) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
