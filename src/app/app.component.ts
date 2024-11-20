import { Component } from '@angular/core';
import {NavigationEnd, Router, RouterLink, RouterOutlet} from '@angular/router';
import {HomeComponent} from "./tukun-tech/components/home/home.component";
import {RegistrationComponent} from "./tukun-tech/components/registration/registration.component";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatIcon} from "@angular/material/icon";
import {MatToolbar} from "@angular/material/toolbar";
import {LoginComponent} from "./tukun-tech/components/login/login.component";
import {filter} from "rxjs";
import {NgIf} from "@angular/common";
import {UpdateAppointmentsComponent} from "./tukun-tech/components/update-appointments/update-appointments.component";
import {SwitchLanguageComponent} from "./tukun-tech/components/switch-language/switch-language.component";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, SwitchLanguageComponent, RegistrationComponent, MatButton, MatIcon, MatIconButton, MatToolbar, RouterLink, LoginComponent, NgIf, TranslateModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

  title = 'TukunTech';

  showToolbar: boolean = true;
  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.showToolbar = event.url !== '/login';
      });
  }

  options = [
    { path: '/home', title: 'Home' },
    { path: '/login', title: 'Login' },
    { path: '/registration', title: 'Registration' },
    { path: '/create-account', title: 'Create Account' },
    { path: '/login-elder', title: 'Login Elder' },
    { path: '/create-elder', title: 'Create Account Elder' },

    { path: '/patients', title: 'Patients'},
    { path: '/patients/registration', title: 'Patient Registration' },

    { path: '/doctors', title: 'Doctors'},
    { path: '/doctors/registration', title: 'Medical Registration' },

    { path: '/appointments', title: 'Appointments'},
    { path: '/appointments/schedule', title: 'Schedule Appointment'},
    { path: '/appointments/reschedule', title: 'Reschedule Appointment'},
    { path: '/appointments/update' , title: 'Update Appointment'},

    { path: '/postoperative', title: 'Postoperative Patients'},
    { path: '/icu', title: 'Icu' },

    { path: '/elder/home', title: 'Home Elder'},
    { path: '/elder/profile', title: 'Elder Profile'},
    { path: '/elder/reminders', title: 'Elder Reminders'},
    { path: '/elder/vital-signs', title: 'Elder Vital Signs'},

    { path: '/support/technical', title: 'Technical Support'},
    { path: '/support/emergency-numbers', title: 'Emergency Numbers'},

  ]
}
