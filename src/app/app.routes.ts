import { Routes } from '@angular/router';
import { HomeComponent } from "./tukun-tech/components/home/home.component";
import { RegistrationComponent } from "./tukun-tech/components/registration/registration.component";
import { PatientRegistrationComponent } from "./tukun-tech/components/patient-registration/patient-registration.component";
import { MedicalRegistrationComponent } from "./tukun-tech/components/medical-registration/medical-registration.component";
import { PatientsComponent } from "./tukun-tech/components/patients/patients.component";
import { DoctorsComponent } from "./tukun-tech/components/doctors/doctors.component";
import { PostPatComponent } from "./tukun-tech/components/post-pat/post-pat.component";
import { IcuPatComponent } from "./tukun-tech/components/icu-pat/icu-pat.component";
import { LoginComponent } from "./tukun-tech/components/login/login.component";
import { CreateAccountComponent } from "./tukun-tech/components/create-account/create-account.component";
import { AppointmentsComponent } from "./tukun-tech/components/appointments/appointments.component";
import { ResheduleAppointmentsComponent } from "./tukun-tech/components/reshedule-appointments/reshedule-appointments.component";
import { ScheduleAppointmentsComponent } from "./tukun-tech/components/schedule-appointments/schedule-appointments.component";

import { HomeElderComponent } from "./tukun-tech/components/home-elder/home-elder.component";
import { ElderProfileComponent } from "./tukun-tech/components/elder-profile/elder-profile.component";
import { ElderRemindersComponent } from "./tukun-tech/components/elder-reminders/elder-reminders.component";
import { TechnicalSupportComponent } from "./tukun-tech/components/technical-support/technical-support.component";
import { CreateAccountElderComponent } from "./tukun-tech/components/create-account-elder/create-account-elder.component";
import { LoginElderComponent } from "./tukun-tech/components/login-elder/login-elder.component";
import { ElderVitalSignsComponent } from "./tukun-tech/components/elder-vital-signs/elder-vital-signs.component";
import { UpdateAppointmentsComponent } from "./tukun-tech/components/update-appointments/update-appointments.component";
import { EmergencyNumbersComponent } from "./tukun-tech/components/emergency-numbers/emergency-numbers.component";

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'login-elder', component: LoginElderComponent },
  { path: 'create-elder', component: CreateAccountElderComponent },

  { path: 'patients', component: PatientsComponent },
  { path: 'patients/registration', component: PatientRegistrationComponent },

  { path: 'doctors', component: DoctorsComponent },
  { path: 'doctors/registration', component: MedicalRegistrationComponent },

  { path: 'appointments', component: AppointmentsComponent },
  { path: 'appointments/schedule', component: ScheduleAppointmentsComponent },
  { path: 'appointments/reschedule', component: ResheduleAppointmentsComponent },
  { path: 'appointments/update', component: UpdateAppointmentsComponent },

  { path: 'postoperative', component: PostPatComponent },
  { path: 'icu', component: IcuPatComponent },

  { path: 'elder/home', component: HomeElderComponent },
  { path: 'elder/profile', component: ElderProfileComponent },
  { path: 'elder/reminders', component: ElderRemindersComponent },
  { path: 'elder/vital-signs', component: ElderVitalSignsComponent },

  { path: 'support/technical', component: TechnicalSupportComponent },
  { path: 'support/emergency-numbers', component: EmergencyNumbersComponent },

  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];
