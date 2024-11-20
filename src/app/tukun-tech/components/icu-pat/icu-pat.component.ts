import {Component, OnInit} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {NgForOf} from "@angular/common";
import {Patient} from "../../model/patients/patient.entity";
import {PatientApiService} from "../../services/patients/patient-api.service";
import {RouterLink} from "@angular/router";
import {BedService} from "../../services/patients/bed.service";
import {Bed} from "../../model/patients/bed";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-icu-pat',
  standalone: true,
  imports: [
    MatCard,
    MatCardContent,
    MatCardHeader,
    MatCardTitle,
    NgForOf,
    TranslateModule
  ],
  templateUrl: './icu-pat.component.html',
  styleUrl: './icu-pat.component.css'
})

export class IcuPatComponent implements OnInit{

  // grilla
  beds: Bed[] =[];

  constructor(private bedService: BedService) {
  }

  ngOnInit() {
    this.consulta();
  }

  consulta() {
    this.bedService.getBed().subscribe(
      x => this.beds = x
    )
  }


}
