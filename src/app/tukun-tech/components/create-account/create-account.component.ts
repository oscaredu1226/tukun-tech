import {Component, OnInit} from '@angular/core';
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";
import {AuthEntity} from "../../model/authentication/auth.entity";
import {AuthenticationService} from "../../services/authentication/authentication.service";
import Swal from "sweetalert2";

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [
    MatFormField,
    MatInput,
    ReactiveFormsModule,
    MatButton,
    RouterLink,
    MatLabel,
    TranslateModule,
    FormsModule,
  ],
  templateUrl: './create-account.component.html',
  styleUrl: './create-account.component.css'
})
export class CreateAccountComponent implements OnInit {

  users: AuthEntity[] = [];
  user: AuthEntity = {

    id: 0,
    username: "",
    password: "",
    firstName: "",
    lastName: "",
    email: ""
  }

  constructor(private authService: AuthenticationService) {
  }

  ngOnInit(): void {
    console.log(this.users)
  }

  register() {
    this.authService.postRegister(this.user).subscribe(x => {
      document.getElementById("btn_reg_cerrar")?.click();
      Swal.fire('Mensaje', x.mensaje, 'success');
    }
    );
    this.user ={
      id: 0,
      username: "",
      password: "",
      firstName: "",
      lastName: "",
      email: ""
    }
  }
}
