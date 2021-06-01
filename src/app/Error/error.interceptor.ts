import { HttpInterceptor,HttpRequest, HttpHandler, HttpErrorResponse } from
'@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import {ErrorComponent} from './error.component';
@Injectable()
export class ErrorInterceptor implements HttpInterceptor
{//just finding the error and displaying the message
 constructor(private dialog: MatDialog){}
 intercept(req: HttpRequest<any>, next: HttpHandler)
 {
 return next.handle(req).pipe(
 catchError((error: HttpErrorResponse)=>{
 let errorMessage = "An Unknown Error has occured ";
 if (error.error.message)
 {
 errorMessage = error.error.message;
 }
 console.log(error);
 this.dialog.open(ErrorComponent,{data:{message:errorMessage}});
 return throwError(error);
 })
 );
 }}
