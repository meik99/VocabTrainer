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
    const url = `${this.URL_BASE}words/${vocab.id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Word[])
      .catch(this.handleError);
  }

  findWordById(wordId: number): Promise<Word>{
    const url = `${this.URL_BASE}word/${wordId}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json() as Word)
      .catch(this.handleError);
  }

  populateWord(word: Word): Promise<Word>{
    return Promise.resolve(
      w => {
        w = new Word(word.id, word.word, word.language_id);
        w.loadWord();
        return w;
      }
    )
  }
}
