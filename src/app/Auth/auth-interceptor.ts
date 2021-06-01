import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth-services';

@Injectable()
export class AuthInterceptor implements HttpInterceptor
{
  constructor(private authService:AuthService){}
//injecting auth into interceptor to use getToken to retrieve token
  intercept(req: HttpRequest<any>, next: HttpHandler)
  {
    const authToken = this.authService.getToken();
    const authRequest = req.clone(
      {
        headers: req.headers.set("Authorization", "Bearer " + authToken)
      });//clone request and set the Authorization header to include Token
    return next.handle(authRequest);//returning intercepted manipulated header
  }


}
