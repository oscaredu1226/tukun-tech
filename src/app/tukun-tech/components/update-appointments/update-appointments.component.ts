import { Component } from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatFormField, MatHint, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {MatOption} from "@angular/material/core";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {MatSelect} from "@angular/material/select";
import {RouterLink} from "@angular/router";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from '@angular/material/core';

@Component({
  selector: 'app-update-appointments',
  standalone: true,
  imports: [
    MatButton,
    MatDatepicker,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatFormField,
    MatHint,
    MatIcon,
    MatInput,
    MatLabel,
    MatOption,
    MatRadioButton,
    MatRadioGroup,
    MatSelect,
    MatSuffix,
    RouterLink,
    MatDatepickerModule,
    MatIconModule,
    MatNativeDateModule
  ],
  templateUrl: './update-appointments.component.html',
  styleUrl: './update-appointments.component.css'
})
export class UpdateAppointmentsComponent {

  onSave() {
    alert("Information has been saved!");
  }
}
