import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';
import {RouterLink} from "@angular/router";
import {TranslateModule} from "@ngx-translate/core";

@Component({
  selector: 'app-home-elder',
  standalone: true,
  imports: [MatButtonModule, MatToolbarModule, RouterModule, TranslateModule],
  templateUrl: './home-elder.component.html',
  styleUrl: './home-elder.component.css'
})
export class HomeElderComponent {

}
