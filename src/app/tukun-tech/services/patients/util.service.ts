import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {BloodType} from "../../model/patients/blood-type";
import {Nationality} from "../../model/patients/nationality";
import {Gender} from "../../model/patients/gender";
import {Specialization} from "../../model/doctors/specialization";
import {Status} from "../../model/pending-medicine/status";
import {TypeAlerts} from "../../model/critical-alerts/type-alerts";
import {Allergy} from "../../model/elders/allergy";
import {Medicalinsurance} from "../../model/elders/medicalinsurance";

@Injectable({
  providedIn: 'root'
})
export class UtilService {
  baseUrl = 'https://tukun-tech-platform.onrender.com/api/v1/util';

  constructor(private http: HttpClient) { }


  getBloodType(): Observable<BloodType[]>{
    return this.http.get<BloodType[]>(this.baseUrl+'/listBlood')
  }

  getNationality(): Observable<Nationality[]>{
    return this.http.get<Nationality[]>(this.baseUrl+'/listNationality')
  }

  getGender(): Observable<Gender[]>{
    return this.http.get<Gender[]>(this.baseUrl+'/listGender')
  }

  getSpecialization(): Observable<Specialization[]>{
   return this.http.get<Specialization[]>(this.baseUrl+'/listSpecialization')
  }

  getAllergy(): Observable<Allergy[]>{
    return this.http.get<Allergy[]>(this.baseUrl+'/listAllergy')
  }
  getMedicalInsurance(): Observable<Medicalinsurance[]>{
    return this.http.get<Medicalinsurance[]>(this.baseUrl+'/listMedicalInsurance')
  }


}
