import { Injectable } from '@angular/core';
import {Http} from "@angular/http";
import {Schooltype} from "../models/Schooltype";
import {BaseService} from "./base.service";
import {Level} from "../models/Level";

@Injectable()
export class SchoollevelService extends BaseService{
  private levelurl: string = this.URL_BASE + "schoollevels";

  constructor(private http: Http) {super();}

  findSchoollevelsForType(schooltype: Schooltype): Promise<Level[]>{
    const requestUrl = `${this.levelurl}/${schooltype.id}`;
    return this.http.get(requestUrl)
      .toPromise()
      .then(request => request.json() as Level[])
      .catch(this.handleError);
  }

  findSchoollevels(): Promise<Level[]>{
    return this.http.get(this.levelurl)
      .toPromise()
      .then(result => result.json() as Level[])
      .catch(this.handleError);
  }

  createLevel(level: Level): Promise<Level[]>{
    return this.http.post(this.levelurl, level, this.requestOptions)
      .toPromise()
      .then(result => result.json() as Level[])
      .catch(this.handleError);
  }

  updateLevel(level: Level): Promise<Level[]>{
    return this.http.put(this.levelurl, level, this.requestOptions)
      .toPromise()
      .then(result => result.json() as Level[])
      .catch(this.handleError);
  }

  deleteLevel(level: Level): Promise<Level[]>{
    return this.http.delete(this.levelurl, this.makeRequestOptionsWithBody(level))
      .toPromise()
      .then(result => result.json() as Level[])
      .catch(this.handleError);
  }
}
