import {Elder} from "./elder.entity";

export class ElderBed {
  id: number;
  hr: number;
  nipb: string;
  sp02: number;
  temp: number;
  elder: Elder;


  constructor(id: number, hr: number, nipb: string, sp02: number, temp: number, elder: Elder) {
    this.id = id;
    this.hr = hr;
    this.nipb = nipb;
    this.sp02 = sp02;
    this.temp = temp;
    this.elder = elder;
  }

}
