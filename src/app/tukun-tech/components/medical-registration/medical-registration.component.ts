import {Component, OnInit} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatFormField} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {MatOption} from "@angular/material/core";
import {MatSelect} from "@angular/material/select";
import {MatToolbar} from "@angular/material/toolbar";
import {RouterLink} from "@angular/router";
import {Doctor} from "../../model/doctors/doctor.entity";
import {DoctorApiService} from "../../services/doctors/doctor-api.service";
import {FormsModule} from "@angular/forms";
import {Nationality} from "../../model/patients/nationality";
import {Specialization} from "../../model/doctors/specialization";
import {UtilService} from "../../services/patients/util.service";
import Swal from "sweetalert2";
import {NgForOf} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-medical-registration',
  standalone: true,
  imports: [
    MatButton,
    MatFormField,
    MatIcon,
    MatInput,
    MatOption,
    MatSelect,
    MatToolbar,
    RouterLink,
    FormsModule,
    NgForOf,
    TranslateModule
  ],
  templateUrl: './medical-registration.component.html',
  styleUrl: './medical-registration.component.css'
})
export class MedicalRegistrationComponent implements OnInit{
  newDoctor: Doctor = {
    id : 0,
    name: "",
    lastName: "",
    dni: "",
    age: 0,
    specialization: {
      id: -1,
      specialization: "-1"
    },
    codeCmp: "",
    contact: "",
    nationality: {
      id: -1,
      nationality: "-1"
    }
  }
  nations : Nationality[] = [];
  specialization: Specialization[] = [];

  constructor(private DoctorsService: DoctorApiService, private utilService:UtilService ) {
    this.utilService.getSpecialization().subscribe(response => this.specialization = response)
    this.utilService.getNationality().subscribe(response => this.nations = response)
  }
  addDoctor(){
    this.DoctorsService.postDoctorInformation(this.newDoctor).subscribe(
      x =>{
        document.getElementById("btn_reg_cerrar")?.click();
        Swal.fire('Mensaje', x.mensaje, 'success');
      }
    );

    this.newDoctor = {
      id : 0,
      name: "",
      lastName: "",
      dni: "",
      age: 0,
      specialization: {
        id: -1,
        specialization: "-1"
      },
      codeCmp: "",
      contact: "",
      nationality: {
        id: -1,
        nationality: "-1"
      }
    }
  }

  ngOnInit(): void {
    console.log(this.nations);
  }


}
