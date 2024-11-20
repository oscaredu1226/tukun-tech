import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatIcon} from "@angular/material/icon";

@Component({
  selector: 'app-reshedule-appointments',
  standalone: true,
  imports: [
    MatButton,
    RouterLink,
    MatLabel,
    MatFormField,
    MatInput,
    MatIcon
  ],
  templateUrl: './reshedule-appointments.component.html',
  styleUrl: './reshedule-appointments.component.css'
})
export class ResheduleAppointmentsComponent {

}
