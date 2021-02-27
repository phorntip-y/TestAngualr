import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  registerUrl = 'https://codingthailand.com/api/insert_user5.php';
  constructor(private http: HttpClient) { }
  register(value: any): Observable<any> {
    const myheader = {'Content-Type': 'application/json'}
    return this.http.post<any>(this.registerUrl,value,{headers: myheader});
  }
}
