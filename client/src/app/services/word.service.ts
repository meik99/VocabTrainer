import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {Http} from "@angular/http";
import {Vocab} from "../models/Vocab";
import {Word} from "../models/Word";
import {LanguageService} from "./language.service";

@Injectable()
export class WordService extends BaseService{

  constructor(
    private http: Http,
    private languageService: LanguageService) { super(); }

  findWordsByVocab(vocab: Vocab): Promise<Word[]>{
    const url = `${this.URL_BASE}words/vocab/${vocab.id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Word[])
      .catch(this.handleError);
  }

  findWordById(wordId: number): Promise<Word>{
    const url = `${this.URL_BASE}words/${wordId}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Word)
      .catch(this.handleError);
  }

  createWord(word: Word): Promise<Word>{
    const url = `${this.URL_BASE}words/`;
    return this.http.post(url, {word: word}, this.requestOptions)
      .toPromise()
      .then(response => {
        return response.json() as Word;
      })
      .catch(this.handleError);
  }
}
