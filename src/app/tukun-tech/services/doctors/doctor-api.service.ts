import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Doctor} from "../../model/doctors/doctor.entity";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DoctorApiService {
  baseUrl = 'https://tukun-tech-platform.onrender.com/api/v1/medics';

  constructor(private http: HttpClient) { }
  getDoctorInformation(): Observable<any>{
    return this.http.get(this.baseUrl+'/medics')
  }
  postDoctorInformation(doctor: Doctor): Observable<any>{
    return this.http.post(this.baseUrl, doctor);
  }
  putDoctor(doctor: Doctor): Observable<any>{
    return this.http.put(this.baseUrl, doctor);
  }
  deleteDoctor(id: number): Observable<any>{
    return this.http.delete(this.baseUrl+'/'+id);
  }

}
