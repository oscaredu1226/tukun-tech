import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

import {Observable} from "rxjs";
import {Elder} from "../../model/elders/elder.entity";
@Injectable({
  providedIn: 'root'
})
export class ElderApiService {
  baseUrl='https://tukun-tech-platform.onrender.com/api/v1/elders';
  constructor(private http:HttpClient) { }
  getElder(): Observable<any>{
    return this.http.get(this.baseUrl+'/elders')
  }
  postElder(elder: Elder): Observable<any>{
    return this.http.post(this.baseUrl, elder)
  }
  putElder(elder: Elder): Observable<any>{
    return this.http.put(this.baseUrl, elder);
  }

  deleteElder(id: number): Observable<any>{
    return this.http.delete(this.baseUrl+'/'+id);
  }
}
