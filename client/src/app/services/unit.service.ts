import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {Http} from "@angular/http";
import {Level} from "../models/Level";
import {Language} from "../models/Language";
import {Unit} from "../models/Unit";
import {Schooltype} from "../models/Schooltype";

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

  findAllUnits(): Promise<Unit[]>{
    return this.http.get(this.URL_BASE)
      .toPromise()
      .then(response => response.json() as Unit[])
      .catch(this.handleError);
  }

  findUnitsByLevel(level: Level): Promise<Unit[]>{
    return this.http.post(
      `${this.URL_BASE}/schoollevel`, level, this.requestOptions
    )
    .toPromise()
    .then(response => response.json() as Unit[])
    .catch(this.handleError);
  }

  findUnitsByType(type: Schooltype): Promise<Unit[]>{
    return this.http.post(
        `${this.URL_BASE}/schooltype`, type, this.requestOptions
    )
    .toPromise()
    .then(response => response.json() as Unit[])
    .catch(this.handleError);
  }

  postUnit(unit: Unit, level: Level): Promise<Unit[]>{
    return this.http.post(
      this.URL_BASE, {unit: unit, level: level}, this.requestOptions
    )
      .toPromise()
      .then(response => response.json() as Unit[])
      .catch(this.handleError);
  }
}
