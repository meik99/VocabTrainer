import { Injectable } from '@angular/core';
import {Schooltype} from "../models/Schooltype";
import {Http} from "@angular/http";

import {BaseService} from "./base.service";

@Injectable()
export class SchooltypeService extends BaseService{
  private typeurl: string = this.URL_BASE + "schooltypes";


  constructor(private http: Http) {super();}

  findAllSchooltypes(): Promise<Schooltype[]>{
    return this.http.get(this.typeurl)
      .toPromise()
      .then(response => response.json() as Schooltype[])
      .catch(this.handleError);
  }
}
