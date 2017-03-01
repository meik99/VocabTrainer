import {Word} from "./Word";
import {WordService} from "../services/word.service";

export class Vocab{
  public word: Word;
  public foreignWord: Word;

  constructor(
    public id: number,
    public word_id: number,
    public foreign_word_id: number
  ){

  }

}
