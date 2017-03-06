import { Injectable } from '@angular/core';

import "rxjs/add/operator/toPromise"
import {environment} from "../../environments/environment";
import {RequestOptions, Headers} from "@angular/http";

@Injectable()
export abstract class BaseService {
  URL_BASE: string = environment.urlbase;
  requestOptions: RequestOptions;

  constructor() {
    this.requestOptions = new RequestOptions();
    this.requestOptions.headers = new Headers();
    this.requestOptions.headers.append("Content-Type", "application/json");
  }

  handleError(error: any){
    if(error.message){
      console.log(error.message);
    }else if(error){
      console.log(error);
    }else{
      console.log("An unexpected error occurred");
    }
    throw error;
  }

  makeRequestOptionsWithBody(body: any) : RequestOptions{
    let requestOptions = new RequestOptions();

    requestOptions.headers = new Headers();
    requestOptions.headers.append("Content-Type", "application/json");
    requestOptions.body = body;

    return requestOptions;
  }

}
