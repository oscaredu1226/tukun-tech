import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatButton } from "@angular/material/button";
import { MatFormField, MatLabel } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { Router, RouterLink } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { AuthenticationService } from "../../services/authentication/authentication.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-login-elder',
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
  templateUrl: './login-elder.component.html',
  styleUrl: './login-elder.component.css'
})
export class LoginElderComponent {
  credentials = {
    username: '',
    password: '',
  };

  constructor(private authService: AuthenticationService, private router: Router) {}

  onSubmit(): void {
    this.authService.login(this.credentials).subscribe({
      next: (response) => {
        this.authService.saveToken(response.token); // Guarda el token
        this.router.navigate(['/elder/home']); // Redirige a la página de inicio del Elder
      },
      error: (error) => {
        console.error('Login failed', error);
        Swal.fire('Error', 'Invalid username or password', 'error');
      },
    });
  }
}
