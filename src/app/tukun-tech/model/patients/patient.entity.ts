import {BloodType} from "./blood-type";
import {Nationality} from "./nationality";
import {Gender} from "./gender";

export class Patient {
  id: number;
  name: string;
  lastName: string;
  dni: string;
  age: number;
  bloodType: BloodType;
  nationality: Nationality;
  gender: Gender;


  constructor(id: number, name: string, lastName: string, dni: string, age: number, bloodType: BloodType, nationality: Nationality, gender: Gender) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.dni = dni;
    this.age = age;
    this.bloodType = bloodType;
    this.nationality = nationality;
    this.gender = gender;
  }
}
