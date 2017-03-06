import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {Http} from "@angular/http";
import {Schooltype} from "../models/Schooltype";
import {Level} from "../models/Level";
import {Language} from "../models/Language";
@Injectable()
export class LanguageService extends BaseService{
  languagesUrl = this.URL_BASE + "languages";
  languageUrl = this.URL_BASE + "language";

  constructor(private http: Http) {super(); }

  findLanguagesByLevel(schoollevel: Level): Promise<Language[]>{
    return this.http.get(`${this.languagesUrl}/${schoollevel.id}`)
      .toPromise()
      .then(response => response.json() as Language[])
      .catch(this.handleError);
  }

  findLanguageById(languageId: number): Promise<Language>{
    return this.http.get(`${this.languageUrl}/${languageId}`)
      .toPromise()
      .then(response => response.json() as Language)
      .catch(this.handleError);
  }
}
