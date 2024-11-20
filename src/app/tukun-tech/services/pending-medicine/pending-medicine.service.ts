import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Doctor} from "../../model/doctors/doctor.entity";
import {PendingMedicine} from "../../model/pending-medicine/pending-medicine";
import {Injectable} from "@angular/core";
import {Patient} from "../../model/patients/patient.entity";

@Injectable({
  providedIn: 'root'
})
export class PendingMedicineService {
  baseUrl = 'https://tukun-tech-platform.onrender.com/api/v1/pendingMedicine';

  constructor(private http: HttpClient) { }

  getMedicine(): Observable<any>{
    return this.http.get(this.baseUrl+'/pendingMedicines')
  }

  deleteMedicine(id: number): Observable<any>{
    return this.http.delete(this.baseUrl+'/'+id);
  }

  postMedicine(PendingMedicine: PendingMedicine): Observable<any>{
    return this.http.post(this.baseUrl, PendingMedicine);
  }

}
