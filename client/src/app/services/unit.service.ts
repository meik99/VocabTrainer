import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {Http} from "@angular/http";
import {Level} from "../models/Level";
import {Language} from "../models/Language";
import {Unit} from "../models/Unit";

@Injectable()
export class UnitService extends BaseService{
  URL_BASE = this.URL_BASE + "units";

  constructor(private http: Http) {super();}

  findUnits(schoollevel: Level, inputLanguage: Language, outputLanguage: Language): Promise<Unit[]>{
    const requestUrl = `${this.URL_BASE}/${schoollevel.id}/${inputLanguage.id}/${outputLanguage.id}`;

    return this.http.get(requestUrl)
      .toPromise()
      .then(response => response.json() as Unit[])
      .catch(this.handleError);
  }
}
