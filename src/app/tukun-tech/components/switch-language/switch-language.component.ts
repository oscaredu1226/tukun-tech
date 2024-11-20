import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {MatButtonToggle, MatButtonToggleGroup} from '@angular/material/button-toggle';

@Component({
  selector: 'app-switch-language',
  standalone: true,
  imports: [ MatButtonToggleGroup, MatButtonToggle],
  templateUrl: './switch-language.component.html',
  styleUrl: './switch-language.component.css'
})
export class SwitchLanguageComponent {
  protected currentLanguage: string = 'en';

  protected languages: string[] = ['en', 'es'];
  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.currentLanguage = this.translate.currentLang;
  }
  useLanguage(language: string){
    this.translate.use(language);
    this.currentLanguage = language;
  }
}
