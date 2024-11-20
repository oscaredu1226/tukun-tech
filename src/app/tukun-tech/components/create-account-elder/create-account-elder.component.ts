import { Component } from '@angular/core';
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from "@angular/material/button";
import { RouterLink } from "@angular/router";
import { TranslateModule } from "@ngx-translate/core";
import { FormsModule } from "@angular/forms";
import { AuthenticationService } from "../../services/authentication/authentication.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-account-elder',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterLink,
    TranslateModule,
    FormsModule
  ],
  templateUrl: './create-account-elder.component.html',
  styleUrls: ['./create-account-elder.component.css']
})
export class CreateAccountElderComponent {
  user = {
    id: 0, // Agrega el atributo `id` aquí
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    email: ''
  };

  constructor(private authService: AuthenticationService) {}

  register(): void {
    this.authService.postRegister(this.user).subscribe({
      next: (response) => {
        Swal.fire('Success', 'User registered successfully!', 'success');
        // Reinicia el objeto `user` después del registro
        this.user = {
          id: 0, // Mantén el id en 0 para registros posteriores
          username: '',
          password: '',
          firstName: '',
          lastName: '',
          email: ''
        };
      },
      error: (error) => {
        Swal.fire('Error', 'Registration failed.', 'error');
        console.error('Error:', error);
      }
    });
  }
}
