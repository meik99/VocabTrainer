import {Language} from "./Language";
import {LanguageService} from "../services/language.service";
import {OnInit} from "@angular/core";
export class Word{

  public language: Language;

  constructor(
    public id: number,
    public word: string,
    public language_id: number,
    private languageService: LanguageService
  ){
  }

  loadWord(): void{
    this.languageService.findLanguageById(this.language_id)
      .then(result => this.language = result)
      .catch(error => console.log(error));
  }
}
