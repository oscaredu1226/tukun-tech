import {Patient} from "./patient.entity";

export class Bed {
  id: number;
  hr: number;
  nipb: string;
  sp02: number;
  temp: number;
  patient: Patient;


  constructor(id: number, hr: number, nipb: string, sp02: number, temp: number, patient: Patient) {
    this.id = id;
    this.hr = hr;
    this.nipb = nipb;
    this.sp02 = sp02;
    this.temp = temp;
    this.patient = patient;
  }

}
