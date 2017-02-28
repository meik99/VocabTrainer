import { Injectable } from '@angular/core';

import "rxjs/add/operator/toPromise"
import {URL_BASE} from "../config";

@Injectable()
export abstract class BaseService {
  URL_BASE: string = URL_BASE;

  constructor() { }

  handleError(error: any){
    if(error.message){
      console.log(error.message);
    }else if(error){
      console.log(error);
    }else{
      console.log("An unexpected error occurred");
    }
  }

}
