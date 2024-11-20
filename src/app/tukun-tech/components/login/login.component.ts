import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {Router, RouterLink} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";
import {AuthEntity} from "../../model/authentication/auth.entity";
import {AuthenticationService} from "../../services/authentication/authentication.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatButton,
    ReactiveFormsModule,
    MatFormField,
    MatInput,
    RouterLink,
    MatLabel,
    TranslateModule,
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  credentials = {
    username: '',
    password: '',
  };

  constructor(private authService: AuthenticationService, private router: Router) {}

  onSubmit(): void {
    this.authService.login(this.credentials).subscribe({
      next: (response) => {
        this.authService.saveToken(response.token); // Guarda el token
        this.router.navigate(['/home']); // Redirige a la página deseada
      },
      error: (error) => {
        console.error('Login failed', error);
        alert('Invalid username or password');
      },
    });
  }

}
