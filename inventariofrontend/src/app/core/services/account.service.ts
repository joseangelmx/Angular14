import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, signIn } from '../interfaces/user';
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
  constructor(private http: HttpClient) { }

  SignIn(request: signIn):Observable<any>{
    let url: string = `${this.urlBase}api/account`;
    return this.http.post<any>(url,request,this.httpOptions);
  }

  SignUp(request: User): Observable<any>{
    let url: string = `${this.urlBase}api/user`;
    return <any> this.http.post(url,request,this.httpOptions);
  }
}
