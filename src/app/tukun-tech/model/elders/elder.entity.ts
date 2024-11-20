export class Elder {
  id: number;
  name: string;
  lastName: string;
  dni: string;
  age: number;
  bloodType: { id: number; type: string };
  nationality: { id: number; nationality: string };
  gender: { id: number; gender: string };
  medicalInsurance: { id: number; medical: string };
  allergy:{ id: number; name: string };

  constructor() {
    this.id = 0;
    this.name = '';
    this.lastName = '';
    this.dni = '';
    this.age = 0;
    this.bloodType = { id: -1, type: '-1' };
    this.nationality = { id: -1, nationality: '-1' };
    this.gender = { id: -1, gender: '-1' };
    this.medicalInsurance ={ id: -1, medical: '-1' }; // Inicializado como cadena vacía
    this.allergy ={ id: -1, name: '-1' }; // Inicializado como cadena vacía
  }
}
