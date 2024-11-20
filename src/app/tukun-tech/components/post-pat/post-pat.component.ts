import {Component, OnInit} from '@angular/core';
import {MatToolbar} from "@angular/material/toolbar";
import {MatButton} from "@angular/material/button";
import {RouterLink} from "@angular/router";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {NgForOf} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {Patient} from "../../model/patients/patient.entity";
import {PatientApiService} from "../../services/patients/patient-api.service";
import {TranslateModule} from "@ngx-translate/core";
import {Bed} from "../../model/patients/bed";
import {BedService} from "../../services/patients/bed.service";

@Component({
  selector: 'app-post-pat',
  standalone: true,
  imports: [
    TranslateModule,
    MatCard,
    MatCardContent,
    MatCardTitle,
    NgForOf
  ],
  templateUrl: './post-pat.component.html',
  styleUrl: './post-pat.component.css'
})
export class PostPatComponent implements OnInit{

  beds: Bed[] =[];
  constructor(private bedService: BedService) { }
  getPostPatientsInfo(){
    this.bedService.getBed().subscribe(
      x=>this.beds = x
    )
  }
  ngOnInit() {
    this.getPostPatientsInfo();
  }

}
