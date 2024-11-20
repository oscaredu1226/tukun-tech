import { Component } from '@angular/core';
import {MatIcon, MatIconModule} from "@angular/material/icon";
import {MatFormField, MatFormFieldModule, MatLabel} from "@angular/material/form-field";
import {MatCheckbox} from "@angular/material/checkbox";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatInput, MatInputModule} from "@angular/material/input";
import {MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from '@angular/material/core';
import {NgForOf} from "@angular/common";
import {DoctorApiService} from "../../services/doctors/doctor-api.service";
import {Doctor} from "../../model/doctors/doctor.entity";

@Component({
  selector: 'app-schedule-appointments',
  standalone: true,
  imports: [
    MatIcon,
    MatLabel,
    MatCheckbox,
    MatRadioButton,
    MatRadioGroup,
    MatFormField,
    MatSelect,
    MatOption,
    MatInput,
    MatButton,
    RouterLink,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatIconModule,
    MatNativeDateModule,
    NgForOf
  ],
  templateUrl: './schedule-appointments.component.html',
  styleUrl: './schedule-appointments.component.css'
})
export class ScheduleAppointmentsComponent {
  doctors: Array<Doctor> =[];

  constructor(private DoctorApi: DoctorApiService) { }
  getDoctorInfo(){
    this.DoctorApi.getDoctorInformation().subscribe((data:any) => {
      console.log(data);
      this.doctors = data;
    })
  }
  ngOnInit() {
    this.getDoctorInfo();
  }

  onClick() {
    alert("Information has been saved!");
  }
}
