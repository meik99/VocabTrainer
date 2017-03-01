import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Unit} from "../../models/Unit";
import {Language} from "../../models/Language";
import {Vocab} from "../../models/Vocab";
import {VocabService} from "../../services/vocab.service";
import {WordService} from "../../services/word.service";
import {LanguageService} from "../../services/language.service";
import { isDevMode } from '@angular/core';
import {Word} from "../../models/Word";
import {KeyboardEvent} from "@angular/platform-browser/src/facade/browser";

@Component({
  selector: 'app-exercise-unit',
  templateUrl: 'exercise-unit.component.html',
  styleUrls: ['exercise-unit.component.css']
})
export class ExerciseUnitComponent implements OnInit, OnChanges {

  @Input()
  unit: Unit;
  @Input()
  inputLanguage: Language;
  @Input()
  outputLanguage: Language;

  private vocabs: Vocab[];
  private current: Vocab;
  private correct: boolean = null;

  constructor(
    private vocabService: VocabService,
    private wordService: WordService,
    private languageService: LanguageService
  ) { }

  ngOnInit() {
    this.updateVocabs();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.updateVocabs();
  }

  updateVocabs(): void{
    this.vocabService.findVocabsByUnit(this.unit)
      .then(result => {
        this.vocabs = result;
        this.vocabs.sort((a, b) => Math.random());
        this.vocabs.forEach(
          v => {
             this.wordService.findWordById(v.word_id)
               .then(w => {
                 v.word = w;
                 this.languageService.findLanguageById(w.language_id)
                   .then(l => {
                     v.word.language = l;
                   });
               });
            this.wordService.findWordById(v.foreign_word_id)
              .then(w => {
                v.foreignWord = w;
                this.languageService.findLanguageById(w.language_id)
                  .then(l => {
                    v.foreignWord.language = l;
                  });
              });
          }
        )
        this.getNext();
    });
  }

  isDevMode(): boolean{
    return isDevMode();
  }

  getNext(){
    if(this.vocabs.length > 0)
      this.current = this.vocabs.pop();
    else
      this.current = null;
  }

  getForeignWord(): Word{
    if(!this.current) return null;

    if(this.outputLanguage.id === this.current.word.language_id){
      return this.current.word;
    }else if(this.outputLanguage.id === this.current.foreignWord.language_id){
      return this.current.foreignWord;
    }else{
      return null;
    }
  }

  checkUserInput(event: KeyboardEvent, input: HTMLInputElement): void{
    if(event.keyCode === 13){
      let checkWord: Word;
      if(this.inputLanguage.id === this.current.word.language_id){
       checkWord = this.current.word;
      }else{
        checkWord = this.current.foreignWord;
      }

      if(input.value.toLowerCase() === checkWord.word.toLowerCase()){
        this.correct = true;
        input.value = "";
        this.getNext();
      }else{
        this.correct = false;
      }
    }
  }
}
