import { Injectable } from '@angular/core';
import {Schooltype} from "../models/Schooltype";
import {Http, RequestOptions} from "@angular/http";

import {BaseService} from "./base.service";

@Injectable()
export class SchooltypeService extends BaseService{
  private typesUrl: string = this.URL_BASE + "schooltypes";
  private typeUrl: string = this.URL_BASE + "schooltype";



  constructor(private http: Http) {super();}

  findAllSchooltypes(): Promise<Schooltype[]>{
    return this.http.get(this.typesUrl)
      .toPromise()
      .then(response => response.json() as Schooltype[])
      .catch(this.handleError);
  }

  findSchooltypeById(schooltype_id: number): Promise<Schooltype>{
    const requestUrl = `${this.typeUrl}/${schooltype_id}`;

    return this.http.get(requestUrl)
      .toPromise()
      .then(response => response.json() as Schooltype)
      .catch(this.handleError);
  }

  createSchooltype(schooltype: Schooltype): Promise<Schooltype[]>{
    return this.http.post(this.typesUrl, schooltype, this.requestOptions)
      .toPromise()
      .then(result => result.json() as Schooltype[])
      .catch(this.handleError);
  }

  updateSchooltype(schooltype: Schooltype): Promise<Schooltype[]>{
    return this.http.put(this.typesUrl, schooltype, this.requestOptions)
      .toPromise()
      .then(result => result.json() as Schooltype[])
      .catch(this.handleError);
  }

  deleteSchooltype(schooltype: Schooltype): Promise<Schooltype[]>{
    return this.http.delete(this.typesUrl, this.makeRequestOptionsWithBody(schooltype))
      .toPromise()
      .then(result => result.json() as Schooltype[])
      .catch(this.handleError);
  }
}
