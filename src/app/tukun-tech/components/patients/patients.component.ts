import {Component, OnInit} from "@angular/core";
import {Patient} from "../../model/patients/patient.entity";
import {PatientApiService} from "../../services/patients/patient-api.service";
import {TranslateModule} from "@ngx-translate/core";
import {MatIcon} from "@angular/material/icon";
import {MatTable} from "@angular/material/table";
import {NgForOf} from "@angular/common";
import Swal from 'sweetalert2';
import {FormsModule} from "@angular/forms";
import {Gender} from "../../model/patients/gender";
import {BloodType} from "../../model/patients/blood-type";
import {Nationality} from "../../model/patients/nationality";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-patients',
  standalone: true,
  imports: [
    TranslateModule,
    MatIcon,
    MatTable,
    NgForOf,
    FormsModule,
    RouterLink
  ],
  templateUrl: './patients.component.html',
  styleUrl: './patients.component.css'
})



export class PatientsComponent implements OnInit {

  patients: Patient[] = [];
  patient: Patient = {
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
  genders: Gender[] = [];
  bloods: BloodType[] = [];
  nations: Nationality[] = [];

  constructor(private patientsservice: PatientApiService, private router: Router) {
  }

  ngOnInit() {
    this.consulta();
  }

  consulta() {
    this.patientsservice.getPatient().subscribe(x => this.patients = x);
  }

  buscar(obj: Patient) {
    this.patient = obj;
    console.log("AAAAAAAAAAAAAAAAAAAAAAAA");
  }


  actualizar() {
    this.patientsservice.putPatient(this.patient).subscribe(
      x => {
        Swal.fire('actualizado', x.message, 'info');
        this.patientsservice.getPatient().subscribe(
          x => this.patients = x
        );
      });

  }


  eliminar(obj: Patient) {
    Swal.fire({
      title: '¿Desea eliminar?',
      text: "Los cambios no se van a revertir",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, elimina.',
      cancelButtonText: 'No, cancelar'
    }).then((result) => {
      if (result.isConfirmed) {

        this.patientsservice.deletePatient(obj.id || 0).subscribe(
          x => {
            Swal.fire('Registro eliminado', x.mensaje, 'success');
            this.patientsservice.getPatient().subscribe(
              x => this.patients = x
            );
          }
        );

      }
    })
  }

}
