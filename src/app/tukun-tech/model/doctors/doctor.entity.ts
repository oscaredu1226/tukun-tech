import {Specialization} from "./specialization";
import {Nationality} from "../patients/nationality";

export class Doctor {
  id: number;
  name: string;
  lastName: string;
  dni: string;
  age: number;
  codeCmp: string;
  nationality: Nationality;
  specialization: Specialization;
  contact: string;

  constructor(id: number, name: string, lastName: string, dni: string, age: number,specialization: Specialization , codeCMP: string, contact: string, nationality: Nationality) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.dni = dni;
    this.age = age;
    this.codeCmp = codeCMP;
    this.nationality = nationality;
    this.specialization = specialization;
    this.contact = contact;
  }

}
