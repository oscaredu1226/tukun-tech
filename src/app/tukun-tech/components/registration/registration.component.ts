import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";


@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [
    MatButton,
    RouterLink,
    TranslateModule
  ],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {

}
