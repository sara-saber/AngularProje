import { HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpCacheService {
  private request:any={};
  constructor() { }
  get(url:string):HttpResponse<any>{
    console.log("we get request from cache")
    return this.request[url]
  }
  put(url:string,response:HttpResponse<any>):void{
     this.request[url]=response,
     console.log("we will add the request to save it in cache")
  }
  invalidate(url:string):void{
     this.request[url]=undefined
  }
  invalidateCache():void{
   this.request={}
   console.log("delete All request from cache")
  }
}
