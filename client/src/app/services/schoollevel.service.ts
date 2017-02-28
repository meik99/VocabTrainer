import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Schooltype} from "../models/Schooltype";
import {BaseService} from "./base.service";
import Level = webdriver.logging.Level;

@Injectable()
export class SchoollevelService extends BaseService{
  private levelurl: string = this.URL_BASE + "schoollevel";

  constructor(private http: Http) {super();}

  findSchoollevelsForType(schooltype: Schooltype): Promise<Level[]>{
    const requestUrl = `${this.levelurl}/${schooltype.id}`;
    return this.http.get(requestUrl)
      .toPromise()
      .then(request => request.json() as Level[])
      .catch(this.handleError);
  }

}
