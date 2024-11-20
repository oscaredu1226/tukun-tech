import { Routes } from '@angular/router';
import {HomeComponent} from "./tukun-tech/components/home/home.component";
import {RegistrationComponent} from "./tukun-tech/components/registration/registration.component";
import {PatientRegistrationComponent} from "./tukun-tech/components/patient-registration/patient-registration.component";
import {MedicalRegistrationComponent} from "./tukun-tech/components/medical-registration/medical-registration.component";
import {PatientsComponent} from "./tukun-tech/components/patients/patients.component";
import {DoctorsComponent} from "./tukun-tech/components/doctors/doctors.component";
import {PostPatComponent} from "./tukun-tech/components/post-pat/post-pat.component";
import {IcuPatComponent} from "./tukun-tech/components/icu-pat/icu-pat.component";
import {LoginComponent} from "./tukun-tech/components/login/login.component";
import {CreateAccountComponent} from "./tukun-tech/components/create-account/create-account.component";
import {AppointmentsComponent} from "./tukun-tech/components/appointments/appointments.component";
import {ResheduleAppointmentsComponent} from "./tukun-tech/components/reshedule-appointments/reshedule-appointments.component";
import {
  ScheduleAppointmentsComponent
} from "./tukun-tech/components/schedule-appointments/schedule-appointments.component";

import {HomeElderComponent} from "./tukun-tech/components/home-elder/home-elder.component";
import {ElderProfileComponent} from "./tukun-tech/components/elder-profile/elder-profile.component";
import {ElderRemindersComponent} from "./tukun-tech/components/elder-reminders/elder-reminders.component";
import {TechnicalSupportComponent} from "./tukun-tech/components/technical-support/technical-support.component";
import {CreateAccountElderComponent} from "./tukun-tech/components/create-account-elder/create-account-elder.component";
import {LoginElderComponent} from "./tukun-tech/components/login-elder/login-elder.component";
import {ElderVitalSignsComponent} from "./tukun-tech/components/elder-vital-signs/elder-vital-signs.component";
import {UpdateAppointmentsComponent} from "./tukun-tech/components/update-appointments/update-appointments.component";
import {AuthGuard} from "./tukun-tech/services/authentication/auth.guard";
import {EmergencyNumbersComponent} from "./tukun-tech/components/emergency-numbers/emergency-numbers.component";

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent , canActivate: [AuthGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent, canActivate: [AuthGuard] },
  { path: 'create-account', component: CreateAccountComponent },
  { path: 'login-elder', component: LoginElderComponent, canActivate: [AuthGuard] },
  { path: 'create-elder', component: CreateAccountElderComponent},

  { path: 'patients', component: PatientsComponent, canActivate: [AuthGuard] },
  { path: 'patients/registration', component: PatientRegistrationComponent, canActivate: [AuthGuard] },

  { path: 'doctors', component: DoctorsComponent, canActivate: [AuthGuard] },
  { path: 'doctors/registration', component: MedicalRegistrationComponent , canActivate: [AuthGuard]},

  { path: 'appointments', component: AppointmentsComponent , canActivate: [AuthGuard]},
  { path: 'appointments/schedule', component: ScheduleAppointmentsComponent , canActivate: [AuthGuard]},
  { path: 'appointments/reschedule', component: ResheduleAppointmentsComponent, canActivate: [AuthGuard] },
  { path: 'appointments/update', component: UpdateAppointmentsComponent, canActivate: [AuthGuard] },

  { path: 'postoperative', component: PostPatComponent , canActivate: [AuthGuard]},
  { path: 'icu', component: IcuPatComponent, canActivate: [AuthGuard] },

  { path: 'elder/home', component: HomeElderComponent, canActivate: [AuthGuard] },
  { path: 'elder/profile', component: ElderProfileComponent , canActivate: [AuthGuard]},
  { path: 'elder/reminders', component: ElderRemindersComponent , canActivate: [AuthGuard]},
  { path: 'elder/vital-signs', component: ElderVitalSignsComponent , canActivate: [AuthGuard]},

  { path: 'support/technical', component: TechnicalSupportComponent , canActivate: [AuthGuard]},
  { path: 'support/emergency-numbers', component: EmergencyNumbersComponent , canActivate: [AuthGuard]},


  { path: '**', redirectTo: 'login', pathMatch: 'full' }
];

