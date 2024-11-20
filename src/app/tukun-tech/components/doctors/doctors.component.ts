import {Component, OnInit} from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatInput} from "@angular/material/input";
import {MatIcon} from "@angular/material/icon";
import {
  MatCell,
  MatCellDef,
  MatColumnDef,
  MatHeaderCell,
  MatHeaderCellDef,
  MatHeaderRow, MatHeaderRowDef, MatRow, MatRowDef,
  MatTable
} from "@angular/material/table";
import {Doctor} from "../../model/doctors/doctor.entity";
import {DoctorApiService} from "../../services/doctors/doctor-api.service";
import {Nationality} from "../../model/patients/nationality";
import {Specialization} from "../../model/doctors/specialization";
import Swal from "sweetalert2";
import {NgForOf} from "@angular/common";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-doctors',
  standalone: true,
  imports: [
    MatInput,
    MatIconButton,
    MatIcon,
    NgForOf,
    TranslateModule
  ],
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.css'
})
export class DoctorsComponent  implements OnInit {
  doctors: Doctor[] =[];
  doctor: Doctor ={
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
  specializations : Specialization[] = [];
  constructor(private DoctorService: DoctorApiService) { }
  getDoctorInfo(){
    this.DoctorService.getDoctorInformation().subscribe(x => this.doctors = x);
  }
  putDoctor(){
    this.DoctorService.putDoctor(this.doctor).subscribe(
      x => {
        Swal.fire('actualizado', x.message, 'info');
        this.DoctorService.getDoctorInformation().subscribe(
          x=>this.doctors=x
        );
      });
  }

  deleteDoctor(obj: Doctor){
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
      if(result.isConfirmed){
        this.DoctorService.deleteDoctor(obj.id || 0).subscribe(
          x => {
            Swal.fire('Doctor eliminado', x.mensaje, 'success');
            this.DoctorService.getDoctorInformation().subscribe(
              x => this.doctors = x
            );
          }
        );
      }
    })
  }
  ngOnInit() {
    this.getDoctorInfo();
  }

}

