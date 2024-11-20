import {TypeAlerts} from "./type-alerts";

export class CriticalAlerts {
  id?: number;
  typeAlert?: TypeAlerts;
  type?: number;

  constructor(id: number, typeAlert: TypeAlerts, type: number) {
    this.id = id;
    this.typeAlert = typeAlert;
    this.type = type;
  }
}
