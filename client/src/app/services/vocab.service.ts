import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {Http} from "@angular/http";
import {Unit} from "../models/Unit";
import {Vocab} from "../models/Vocab";
import {WordService} from "./word.service";

@Injectable()
export class VocabService extends BaseService{

  constructor(
    private http: Http,
    private wordService: WordService) {super();}

  findVocabsByUnit(unit: Unit): Promise<Vocab[]>{
    const requestUrl = `${this.URL_BASE}vocabs/${unit.id}`;
    return this.http.get(requestUrl)
      .toPromise()
      .then(response => response.json() as Vocab[])
      .catch(this.handleError);
  }

}
