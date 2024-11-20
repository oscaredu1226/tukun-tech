import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import {RouterLink} from "@angular/router";
import {PendingMedicine} from "../../model/pending-medicine/pending-medicine";
import {PendingMedicineService} from "../../services/pending-medicine/pending-medicine.service";
import Swal from "sweetalert2";
import {FormsModule} from "@angular/forms";
import {MatInput} from "@angular/material/input";
import {TranslateModule} from "@ngx-translate/core";


@Component({
  selector: 'app-elder-reminders',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    RouterLink,
    FormsModule,
    MatInput,
    TranslateModule
  ],
  templateUrl: './elder-reminders.component.html',
  styleUrl: './elder-reminders.component.css'
})
export class ElderRemindersComponent implements OnInit {
 pendingMedicines: PendingMedicine[] = [];


 pendingMedicine: PendingMedicine = {
     id: 0,
     medicineName: "",
     status: null,
     dosage: "",
     timeToTake: null,
     elder: null,
   }



   constructor(private pendingMedicineService: PendingMedicineService) {}

  ngOnInit(): void{
  this.getPendingMedicines();
  }

  getPendingMedicines(){
    this.pendingMedicineService.getMedicine().subscribe(
      el => this.pendingMedicines = el
    )
  }



  postPendingMedicine(){
    this.pendingMedicineService.postMedicine(this.pendingMedicine).subscribe(res=>{
      document.getElementById("btn_reg_cerrar")?.click();
      Swal.fire('Mensaje', res.mensaje, 'success');
    }) ;

    this.pendingMedicine = {
      id: 0,
      medicineName: "",
      status: null,
      dosage: "",
      timeToTake: null,
      elder: null,
      }


  }

  deletePendingMedicines(obj: PendingMedicine){

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
        this.pendingMedicineService.deleteMedicine(obj.id || 0).subscribe(
          x => {
            Swal.fire('Medicina Pendiente eliminada', x.mensaje, 'success');
            this.pendingMedicineService.getMedicine().subscribe(
              x => this.pendingMedicines = x
            );
          }
        );
      }
    })




  }


}
