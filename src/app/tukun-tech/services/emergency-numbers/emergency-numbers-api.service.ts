import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {EmergencyNumbers} from "../../model/emergency-numbers/emergency-numbers";

@Injectable({
  providedIn: 'root'
})
export class EmergencyNumbersApiService {
  baseUrl = 'https://tukun-tech-platform.onrender.com/api/v1/emergencyNumbers';

  constructor(private http: HttpClient) {}

  getEmergencyNumbers(): Observable<any> {
    return this.http.get(this.baseUrl + '/emergencyNumbers');
  }

  postEmergencyNumbers(emergencyNumbers: EmergencyNumbers): Observable<any>{
    return this.http.post(this.baseUrl, emergencyNumbers);
  }

  putEmergencyNumbers(emergencyNumbers: EmergencyNumbers): Observable<any>{
    return this.http.put(this.baseUrl +'/' + emergencyNumbers.id, emergencyNumbers);
  }

  deleteEmergencyNumbers(id: number): Observable<any>{
    return this.http.delete(this.baseUrl+'/'+id);
  }

}
