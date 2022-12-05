
import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpContextToken
} from '@angular/common/http';
import { Observable } from 'rxjs';
export const content_type=new HttpContextToken(()=>'application/json')

@Injectable()
export class HeadersInterceptor implements HttpInterceptor {
  constructor() {}
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log('Header Interceptor')
    let jsonReq=request.clone({
      setHeaders:{'Content-type':request.context.get(content_type)}
    })
    return next.handle(jsonReq)
  }
}
