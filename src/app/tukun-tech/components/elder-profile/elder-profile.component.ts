import { Component, OnInit } from '@angular/core';
import { MatToolbar } from "@angular/material/toolbar";
import { MatButton } from "@angular/material/button";
import { RouterLink } from "@angular/router";
import { MatFormField } from "@angular/material/form-field";
import { MatInput } from "@angular/material/input";
import { MatOption, MatSelect } from "@angular/material/select";
import { MatIcon } from "@angular/material/icon";
import { FormsModule } from "@angular/forms";
import { TranslateModule } from "@ngx-translate/core";
import { NgForOf } from "@angular/common";
import Swal from 'sweetalert2';

import { UtilService } from "../../services/patients/util.service";
import {Elder} from "../../model/elders/elder.entity";
import {ElderApiService} from "../../services/elders/elder-api.service";

@Component({
  selector: 'app-elder-profile',
  standalone: true,
  imports: [
    MatToolbar,
    MatButton,
    RouterLink,
    MatFormField,
    MatInput,
    MatSelect,
    MatOption,
    MatIcon,
    FormsModule,
    TranslateModule,
    NgForOf
  ],
  templateUrl: './elder-profile.component.html',
  styleUrls: ['./elder-profile.component.css']
})
export class ElderProfileComponent implements OnInit {
  elder: Elder = {
    id: 0,
    name: "",
    lastName: "",
    dni: "",
    age: 0,
    bloodType: { id: -1, type: "-1" },
    nationality: { id: -1, nationality: "-1" },
    gender: { id: -1, gender: "-1" },
    medicalInsurance: { id: -1, medical: "-1" },
    allergy: { id: -1, name: "-1" }
  };

  genders: any[] = [];
  bloods: any[] = [];
  nations: any[] = [];
  medicalInsurances: any[] = [];
  allergies: any[] = [];

  constructor(private elderService: ElderApiService, private utilService: UtilService) {}

  ngOnInit(): void {
    this.utilService.getGender().subscribe(response => this.genders = response);
    this.utilService.getBloodType().subscribe(response => this.bloods = response);
    this.utilService.getNationality().subscribe(response => this.nations = response);
    this.utilService.getMedicalInsurance().subscribe(response => this.medicalInsurances = response);
    this.utilService.getAllergy().subscribe(response => this.allergies = response);
  }

  registerElderProfile(): void {
    this.elderService.postElder(this.elder).subscribe(
      response => {
        Swal.fire('Success', 'Elder profile saved successfully!', 'success');
        this.resetElderProfile();
      },
      error => {
        Swal.fire('Error', 'Failed to save Elder profile. Please try again.', 'error');
      }
    );
  }

  private resetElderProfile(): void {
    this.elder = {
      id: 0,
      name: "",
      lastName: "",
      dni: "",
      age: 0,
      bloodType: { id: -1, type: "-1" },
      nationality: { id: -1, nationality: "-1" },
      gender: { id: -1, gender: "-1" },
      medicalInsurance: { id: -1, medical: "-1" },
      allergy: { id: -1, name: "-1" }
    };
  }
}
