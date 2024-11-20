import {Status} from "./status";
import {Elder} from "../elders/elder.entity";


export class PendingMedicine {
  id?: number;
  medicineName?: string;
  status?: Status | null;
  dosage?: string;
  timeToTake?: Date | null;
  elder?: Elder | null;



  constructor(id: number, medicineName: string, status: Status, dosage: string, timeToTake: Date, elder: Elder) {
    this.id = id;
    this.medicineName = medicineName;
    this.status = status;
    this.dosage = dosage;
    this.timeToTake = timeToTake;
    this.elder = elder;

  }


}
