import {Component, OnInit} from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {MatFormField, MatLabel} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {MatOption, MatSelect} from "@angular/material/select";
import {MatIcon} from "@angular/material/icon";
import {Patient} from "../../model/patients/patient.entity";
import {PatientApiService} from "../../services/patients/patient-api.service";
import {FormsModule} from "@angular/forms";
import {TranslateModule} from "@ngx-translate/core";
import Swal from "sweetalert2";
import {NgForOf} from "@angular/common";
import {Gender} from "../../model/patients/gender";
import {UtilService} from "../../services/patients/util.service";
import {BloodType} from "../../model/patients/blood-type";
import {Nationality} from "../../model/patients/nationality";



@Component({
  selector: 'app-patient-registration',
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
  templateUrl: './patient-registration.component.html',
  styleUrl: './patient-registration.component.css'
})
export class PatientRegistrationComponent implements OnInit {

  patient: Patient = {
    id : 0,
    name: "",
    lastName: "",
    dni: "",
    age: 0,
    bloodType: {
      id : -1,
      type : "-1",
    },
    nationality: {
      id : -1,
      nationality : "-1",
    },
    gender: {
      id : -1,
      gender : "-1",
    }
  }
  genders : Gender[] = [];
  bloods : BloodType[] = [];
  nations : Nationality[] = [];

  constructor(private patientsservice: PatientApiService, private utilservice:UtilService) {
     this.utilservice.getGender().subscribe(response => this.genders = response)
    this.utilservice.getBloodType().subscribe(response => this.bloods = response)
    this.utilservice.getNationality().subscribe(response => this.nations = response)
  }


  register() {

    this.patientsservice.postPatient(this.patient).subscribe(
      x => {
        document.getElementById("btn_reg_cerrar")?.click();
        Swal.fire('Mensaje', x.mensaje, 'success');
      }
    );

    //limpiar los componentes del formulario a través de los ngModel
    this.patient = {
      id: 0,
      name: "",
      lastName: "",
      dni: "",
      age: 0,
      bloodType: {
        id: -1,
        type: "-1",
      },
      nationality: {
        id: -1,
        nationality: "-1",
      },
      gender: {
        id: -1,
        gender: "-1",
      }
    }
  }

  ngOnInit(): void {
    console.log(this.genders);}



}
