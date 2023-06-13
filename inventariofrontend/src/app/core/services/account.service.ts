import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { User, signIn } from '../interfaces/user';
import { ResponseArrayModel, ResponseModel } from '../interfaces/response-model';
import { SwalAlertService } from './swal-alert.service';
@Injectable({
  providedIn: 'root'
})
export class AccountService {
  urlBase:string ='https://localhost:44360/';

  httpOptions ={
    headers: new HttpHeaders({
      'Content-Type':'application/json'
    })
  }
  constructor(
    private http: HttpClient,
    private alertS: SwalAlertService
    ) { }

  errorHandler(error:HttpErrorResponse){
    let errorMessage =`Error Code: ${error.status}`

    if(error.status==404){
      this.alertS.errorAlert('Lo sentimos, error detectado, favor de validar mas tarde','Error inesperado!')
    }
    if(error.error.hasError && error.status ==200){
      errorMessage =`message: ${error.error.message}`
    }
    return throwError(()=> new Error(errorMessage));
  }
  getUsers(){
    let url: string = `${this.urlBase}api/user`;
    return this.http.get<ResponseArrayModel<User>>(url,this.httpOptions)
    .pipe(catchError(this.errorHandler));
  }
  SignIn(request: signIn):Observable<ResponseModel<any>>{
    let url: string = `${this.urlBase}api/account`;
    return this.http.post<ResponseModel<any>>(url,request,this.httpOptions)
    .pipe(catchError(this.errorHandler));
  }

  SignUp(request: User): Observable<ResponseModel<any>>{
    let url: string = `${this.urlBase}api/user`;
    return <any> this.http.post<ResponseModel<any>>(url,request,this.httpOptions)
    .pipe(catchError(this.errorHandler));
  }

  updateUser(request: User, id:string): Observable<ResponseModel<any>>{
    let url: string = `${this.urlBase}api/user/${id}`;
    let request2 ={...request, password:"Test01."}
    return <any> this.http.put<ResponseModel<any>>(url,request2,this.httpOptions)
    .pipe(catchError(this.errorHandler));
  }
}
