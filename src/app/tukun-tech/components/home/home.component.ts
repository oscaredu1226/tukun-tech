import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {MatToolbar} from "@angular/material/toolbar";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatCard} from "@angular/material/card";
import {NgOptimizedImage} from "@angular/common";
import {MatIcon} from "@angular/material/icon";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [
    MatToolbar,
    MatButton,
    RouterLink,
    MatCard,
    NgOptimizedImage,
    MatIconButton,
    MatIcon,
    TranslateModule
  ],
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private router: Router) {}

  navigate(route: string): void {
    this.router.navigate([`/${route}`]);
  }
}
