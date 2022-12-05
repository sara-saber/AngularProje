import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable,tap } from 'rxjs';
import { Users } from '../models/users';
import { environment } from 'src/environments/environment.prod';
@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private url=environment.url;
  constructor(private http:HttpClient) {
   }
   getUsers():Observable<Users[]>{
    return this.http.get<Users[]>(this.url+'/users').pipe(
      tap(x=>console.log(x))
    )
   }
   getUser(id:string):Observable<Users>{
    return this.http.get<Users>(this.url+'/user/'+id).pipe(
      tap(x=>console.log(x))
    )
   }
   addUser(model:Users):Observable<Users>{
    return this.http.post<Users>(this.url+'/user',model).pipe(
      tap(x=>console.log(x))
    )
   }
   deleteUser(id:string):Observable<void>{
    return this.http.delete<void>(this.url+'/user/'+id)
   }
   updateUser(id:string,model:Users):Observable<Users>{
    return this.http.put<Users>(this.url+'/user/'+id,model).pipe(
      tap(x=>console.log(x))
    )
   }
}
