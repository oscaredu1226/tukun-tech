import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {TechnicalSupport} from "../../model/technicalSupport/technical-support";

@Injectable({
  providedIn: 'root'
})
export class TechnicalSupportService {
  baseUrl = 'https://tukun-tech-platform.onrender.com/api/v1/soporte';

  constructor(private http: HttpClient) {}

  getTechnicalSupport(): Observable<any> {
    return this.http.get(this.baseUrl + '/faqs');
  }

  postTechnicalSupport(technicalSupport: TechnicalSupport): Observable<any>{
    return this.http.post(this.baseUrl, technicalSupport);
  }



}
