import { logging } from 'protractor';
import { HttpClient, HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  registerUrl = 'https://codingthailand.com/api/insert_user5.php';
  loginurl = 'https://dev-zgb00355.us.auth0.com/oauth/token';
  profileurl = 'https://dev-zgb00355.us.auth0.com/userinfo';
  constructor(private http: HttpClient) { }
  register(value: any): Observable<any> {
    const myheader = { 'Content-Type': 'application/json' }
    return this.http.post<any>(this.registerUrl, value, { headers: myheader });
  }
  loging(loginval: any): Observable<any> {
    const header = { 'Content-Type': 'application/json' }
    const body = {
      'client_id': 'dLM6aLBNqz0q24jNlR6VJVZvuA0fSs6I',
      'grant_type': 'password',
      'username': loginval.email,
      'password': loginval.password,
    };
    return this.http.post<any>(this.loginurl, body, { headers: header }).pipe(
      catchError(this.handelError)
    );
  }
  getprofile(): Observable<any> {
    const token = JSON.parse(localStorage.getItem('token') || '{}');
    const myparam = {
      'Authorization': 'Bearer ' + token.access_token
    }
    return this.http.get<any>(this.profileurl, { headers: myparam })
  }
  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('profile');
  }
  islogin(): boolean {
    const token = localStorage.getItem('token');
    if (token) {
      return true;
    } else {
      return false;
    }
  }
  private handelError(error: HttpErrorResponse) {
    return throwError(error);
  }
}
