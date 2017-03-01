import {Language} from "./Language";
import {LanguageService} from "../services/language.service";
import {OnInit} from "@angular/core";
export class Word{
  language: Language;

  constructor(
    public id: number,
    public word: string,
    public language_id: number
  ){
  }

}
