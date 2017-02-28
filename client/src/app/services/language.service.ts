import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {Http} from "@angular/http";
import {Schooltype} from "../models/Schooltype";
import {Level} from "../models/Level";
import {Language} from "../models/Language";
import {URL_BASE} from "../config";

@Injectable()
export class LanguageService extends BaseService{
  URL_BASE = this.URL_BASE + "languages";

  constructor(private http: Http) {super(); }

  findLanguagesByLevel(schoollevel: Level): Promise<Language[]>{
    return this.http.get(`${this.URL_BASE}/${schoollevel.id}`)
      .toPromise()
      .then(response => response.json() as Language[])
      .catch(this.handleError);
  }
}
