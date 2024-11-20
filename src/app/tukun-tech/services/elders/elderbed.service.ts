import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import {ElderBed} from "../../model/elders/elderbed";

@Injectable({
  providedIn: 'root'
})
export class ElderBedService {
  private baseUrl = 'https://tukun-tech-platform.onrender.com/api/v1/elder-bed'; // URL del endpoint del backend

  constructor(private http: HttpClient) { }

  // Método para obtener los registros de elderbeds
  getelderBeds():  Observable<any>{
    return this.http.get(this.baseUrl)
  }
}
