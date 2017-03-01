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

  populateVocab(vocab: Vocab): Promise<Vocab>{
    return Promise.resolve( v => {
          v = new Vocab(vocab.id, vocab.word_id, vocab.foreign_word_id, this.wordService)
          v.loadWords();
          return v;
        }
      )
      .catch(this.handleError);
  }

  populateVocabs(vocabs: Vocab[]): Promise<Vocab[]> {
    return new Promise((resolve, reject) => {
      let populatedVocabs: Vocab[] = [];
      vocabs.forEach(v => {
          this.populateVocab(v)
          .then(result => {
            populatedVocabs.push(result);
          });
      });
    });
  }
}
