import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {AuthEntity} from "../../model/authentication/auth.entity";
import {Observable} from "rxjs";
import {AuthResponse} from "../../model/authentication/auth-reponse.model";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  baseUrl = 'https://tukun-tech-platform.onrender.com/api/v1/auth';

  constructor(private http: HttpClient) { }

  login(credentials: { username: string; password: string }): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(this.baseUrl + '/login', credentials); // Especifica el tipo
  }

  postRegister(auth: AuthEntity): Observable<any>{
    return this.http.post(this.baseUrl + '/register', auth);
  }
  saveToken(token: string): void {
    localStorage.setItem('authToken', token); // Guarda el token en localStorage
  }

  getToken(): string | null {
    return localStorage.getItem('authToken'); // Recupera el token
  }

  logout(): void {
    localStorage.removeItem('authToken'); // Elimina el token
  }
}
