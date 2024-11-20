import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class BedService {
  baseUrl = 'https://tukun-tech-platform.onrender.com/api/v1/bed';

  constructor(private http: HttpClient) { }


  getBed(): Observable<any>{
    return this.http.get(this.baseUrl)
  }

}
