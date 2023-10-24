import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class RequestServiceService {

  constructor(private http:HttpClient) { }
  getData<Type> (url: string) {
    return this.http.get<Type>(url);
  }

  deleteItem (url: string) {
    let header = new HttpHeaders({'Authorization': 'Bearer eyJhbGciOiJSUzI1NiIsImtpZCI6IjY0RE9XMnJoOE9tbjNpdk1NU0'});
    return this.http.delete(url, {headers: header});
  }

  post<Type>(url: string, value: any) {
    let header = new HttpHeaders({'Content-type': 'application/json'});
    return this.http.post(url, value, {headers: header});
  }

  put<Type>(url: string, data: Type) {
    let header = new HttpHeaders({'Content-type': 'application/json'});
    return this.http.put(url, data, {headers: header});
  }
}
