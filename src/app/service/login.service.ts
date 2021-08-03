import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private httpClient: HttpClient) { }
  getlogin(email: string, password: string) {
    let param1 = new HttpParams;
    param1 = param1.set('email', email.toString());
    param1 = param1.set('password', password.toString());
    return this.httpClient.get("http://127.0.0.1/project_pfe/General/login", { params: param1 });
  }
}
