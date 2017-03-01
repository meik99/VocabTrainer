import {Word} from "./Word";
import {WordService} from "../services/word.service";

export class Vocab{
  public word: Word;
  public foreignWord: Word;

  constructor(
    public id: number,
    public word_id: number,
    public foreign_word_id: number,
    private wordService: WordService
  ){

  }

  loadWords(): void{
    this.wordService.findWordById(this.word_id)
      .then(result => {
        this.word = result;
        this.wordService.populateWord(this.word)
          .then(result => this.word = result);
      });

    this.wordService.findWordById(this.foreign_word_id)
      .then(result => {
        this.foreignWord = result;
        this.wordService.populateWord(this.foreignWord)
          .then(result => this.foreignWord = result)
      });
  }
}
