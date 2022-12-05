import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpContextToken
} from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
import { HttpCacheService } from './http-cache.service';
export const cachable = new HttpContextToken<boolean>(() => true);
@Injectable()
export class CacheInterceptor implements HttpInterceptor {

  constructor(private cache: HttpCacheService) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if(!request.context.get(cachable)){
     return next.handle(request)
    }
    if (request.method !== 'GET') {
      this.cache.invalidateCache();
      return next.handle(request);
    }
    const cachedRequest: HttpResponse<any> = this.cache.get(request.url)
    if (cachedRequest) {
      console.log("request found in cache")
      return of(cachedRequest)
    }
    return next.handle(request).pipe(
      tap(event => {
        if (event instanceof HttpResponse) {
          this.cache.put(request.url, event)
        }
      })
    )
  }
}
