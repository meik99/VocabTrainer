import {Component, OnInit, Input} from '@angular/core';
import {Schooltype} from "../../../models/Schooltype";
import {Level} from "../../../models/Level";
import {Language} from "../../../models/Language";
import {LanguageService} from "../../../services/language.service";
import {isUndefined} from "util";

@Component({
  selector: 'app-language-selection',
  templateUrl: 'language-selection.component.html',
  styleUrls: ['language-selection.component.css']
})
export class InputLanguageSelectionComponent implements OnInit {
  @Input()
  schoollevel: Level;

  private languages: Language[];
  private inputLanguage: Language;
  private outputLanguage: Language;

  constructor(
    private languageService: LanguageService
  ) { }

  ngOnInit() {
    this.languageService.findLanguagesByLevel(this.schoollevel)
      .then(languages => this.languages = languages);
  }

  selectInputLanguage(lang: Language): void{
    if(isUndefined(this.outputLanguage) || this.outputLanguage == null || this.outputLanguage != lang){
      this.inputLanguage = lang;
    }
  }

  selectOutputLanguage(lang: Language): void{
    if(isUndefined(this.inputLanguage) || this.inputLanguage == null || this.inputLanguage != lang){
      this.outputLanguage = lang;
    }
  }

  resetLanguages(): void{
    this.inputLanguage = null;
    this.outputLanguage = null;
  }
}
