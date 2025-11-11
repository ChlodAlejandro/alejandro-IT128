import { Component, NgModule, OnInit } from '@angular/core';
import { Auth } from '../../services/auth';
import { TokenStorage } from '../../services/token-storage';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

@Component({
  selector: 'app-login-page',
  imports: [ FormsModule, BrowserModule ],
  templateUrl: './login-page.html',
  styleUrl: './login-page.scss',
})
export class LoginPage implements OnInit {
  form: any = {
    username: null,
    password: null
  }

  constructor(
    private authService: Auth,
    private tokenStorage: TokenStorage,
    private http: HttpClient,
    private router: Router
  ) {

  }

  ngOnInit(): void {
      if (this.tokenStorage.getToken()) {
        this.authService.isLoggedIn = true;
        this.router.navigate([this.authService.redirectUrl]);
      }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.http.post<LoginPostData>('https://localhost:7286/api/Login/login', {
      username,
      password
    }).subscribe(data => {
      this.tokenStorage.saveToken(data.id_token);
      this.tokenStorage.saveUser(data.id);
      this.router.navigate([this.authService.redirectUrl]);
      window.location.reload();
    });
  }

}

export interface LoginPostData {
  id_token: string;
  id: number;
}
