import {BloodType} from "../patients/blood-type";
import {Nationality} from "../patients/nationality";
import {Patient} from "../patients/patient.entity";

// Interfaces para los nuevos tipos
interface MedicalInsurance {
  id: number;
  // Añade más propiedades según necesites
}

interface Allergy {
  id: number;
  // Añade más propiedades según necesites
}

export class HistoryClinic {
  private id: number;
  private queries: string;
  private treatment: string;
  private exam: string;
  private patient: Patient;
  private bloodType: BloodType;
  private nationality: Nationality;
  private medicalInsurance: MedicalInsurance;
  private allergy: Allergy;
  private date: string;

  constructor(
    id: number,
    patient: Patient,
    bloodType: BloodType,
    nationality: Nationality,
    medicalInsurance: MedicalInsurance,
    allergy: Allergy,
    date: string = new Date().toISOString(),
    queries: string = '',
    treatment: string = '',
    exam: string = ''
  ) {
    this.id = id;
    this.patient = patient;
    this.bloodType = bloodType;
    this.nationality = nationality;
    this.medicalInsurance = medicalInsurance;
    this.allergy = allergy;
    this.date = date;
    this.queries = queries;
    this.treatment = treatment;
    this.exam = exam;
  }
}
