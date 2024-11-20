import {Component, OnInit} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgForOf } from '@angular/common';
import {RouterLink} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";
import {FormsModule} from "@angular/forms";

import Swal from "sweetalert2";

import {MatCard} from "@angular/material/card";
import {EmergencyNumbers} from "../../model/emergency-numbers/emergency-numbers";
import {EmergencyNumbersApiService} from "../../services/emergency-numbers/emergency-numbers-api.service";

@Component({
  selector: 'app-emergency-numbers',
  templateUrl: './emergency-numbers.component.html',
  standalone: true,
  imports: [
    MatButtonModule,
    MatIconModule,
    NgForOf,
    RouterLink,
    TranslateModule,
    NgForOf,
    FormsModule,
    MatCard
  ],
  styleUrls: ['./emergency-numbers.component.css']
})

export class EmergencyNumbersComponent implements OnInit{

  emergencyNumbers: EmergencyNumbers[] = [];

  emergencyNumber: EmergencyNumbers = {
    id: 0,
    number: "",
    contactName: ""
  }

  constructor(private emergencyNumbersApi: EmergencyNumbersApiService) {}

  addEmergencyNumbers(){
    this.emergencyNumbersApi.postEmergencyNumbers(this.emergencyNumber).subscribe(x=>{
      document.getElementById("btn_reg_cerrar")?.click();
      Swal.fire('Mensaje', x.mensaje, 'success');
    }) ;

    this.emergencyNumber = {
      id: 0,
      number: "",
      contactName: ""
    }
  }

  getEmergencyNumbers() {

    this.emergencyNumbersApi.getEmergencyNumbers().subscribe((data: any) => {
      console.log(data)
      this.emergencyNumbers = data;
    });
  }



  putEmergencyNumbers(){
    this.emergencyNumbersApi.putEmergencyNumbers(this.emergencyNumber).subscribe(
      x=>{
        Swal.fire('Updated', x.message, 'info');
        this.emergencyNumbersApi.getEmergencyNumbers().subscribe(
          x => this.emergencyNumbers = x
        );
      }) ;
  }

  deleteEmergencyNumbers(obj:EmergencyNumbers){
    Swal.fire({
      title: 'Are you sure you want to delete this emergency number?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel'
    }).then((result) => {
      if (result.isConfirmed) {

        this.emergencyNumbersApi.deleteEmergencyNumbers(obj.id || 0).subscribe(
          x  =>  {
            Swal.fire('Deleted',x.message,'success');
            this.emergencyNumbersApi.getEmergencyNumbers().subscribe(
              x => this.emergencyNumbers = x
            );
          }
        );
      }
    })
  }

  ngOnInit() {
    this.getEmergencyNumbers();
  }

}

