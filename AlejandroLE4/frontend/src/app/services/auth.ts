import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Auth {
  isLoggedIn: boolean = false;
  public redirectUrl: string = "";

  constructor(private http: HttpClient) {

  }

  login(username: string, password: string) {
    return this.http.post('https://localhost:7286/api/Login/login', {
      username,
      password
    });
  }
  
}
