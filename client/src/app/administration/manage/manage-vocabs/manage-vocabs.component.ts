import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {SchooltypeService} from "../../../services/schooltype.service";
import {SchoollevelService} from "../../../services/schoollevel.service";
import {LanguageService} from "../../../services/language.service";
import {UnitService} from "../../../services/unit.service";
import {VocabService} from "../../../services/vocab.service";
import {Schooltype} from "../../../models/Schooltype";
import {Level} from "../../../models/Level";
import {Language} from "../../../models/Language";
import {Unit} from "../../../models/Unit";
import {Vocab} from "../../../models/Vocab";
import {WordService} from "../../../services/word.service";
import {Word} from "../../../models/Word";

@Component({
  selector: 'app-manage-vocabs',
  templateUrl: './manage-vocabs.component.html',
  styleUrls: ['./manage-vocabs.component.css']
})
export class ManageVocabsComponent implements OnInit {
  private types: Schooltype[];
  private levels: Level[];
  private languages: Language[];
  private foreignLanguages: Language[];
  private units: Unit[];
  private vocabs: Vocab[];

  private _filterType: Schooltype = null;
  private _filterLevel: Level = null;
  private _filterLanguage: Language = null;
  private _filterForeignLanguage: Language = null;
  private _filterUnit: Unit = null;

  @Input()
  private word: string = "";
  @Input()
  private foreignWord: string = "";

  constructor(
    private typeService: SchooltypeService,
    private levelService: SchoollevelService,
    private languageService: LanguageService,
    private unitService: UnitService,
    private vocabService: VocabService,
    private wordService: WordService
  ) { }

  ngOnInit() {
    this.typeService.findAllSchooltypes()
      .then(result => this.types = result);
  }

  @Input("filterType")
  set filterType(type: Schooltype){
    this._filterType = type;

    if(type){
      this.levelService.findSchoollevelsForType(type)
        .then(result => this.levels = result);
    }else{
      this.levels = [];
    }

    this.filterLevel = null;
  }

  get filterType(){
    return this._filterType;
  }

  @Input("filterLevel")
  set filterLevel(level: Level){
    this.filterLanguage = null;
    this.filterForeignLanguage = null;

    this._filterLevel = level;

    if(level){
      this.languageService.findLanguagesByLevel(level)
        .then(result => {
          this.languages = result;
          this.foreignLanguages = result;
        });
    }else{
      this.languages = [];
      this.foreignLanguages = [];
    }
  }

  get filterLevel(){
    return this._filterLevel;
  }

  @Input("filterLanguage")
  set filterLanguage(language: Language){
    this._filterLanguage = language;
    this.languagesUpdated();
  }

  @Input("filterForeignLanguage")
  set filterForeignLanguage(language: Language){
    this._filterForeignLanguage = language;
    this.languagesUpdated();
  }

  get filterLanguage(){
    return this._filterLanguage;
  }

  get filterForeignLanguage(){
    return this._filterForeignLanguage;
  }

  languagesUpdated(){
    this.filterUnit = null;
    if(this._filterLevel && this._filterLanguage && this._filterForeignLanguage){
      this.unitService.findUnits(
        this._filterLevel,
        this._filterLanguage,
        this._filterForeignLanguage
      ).then(result => this.units = result);
    }
  }

  @Input("filterUnit")
  set filterUnit(unit: Unit){
    this._filterUnit = unit;

    if(unit){
      this.vocabService.findVocabsByUnit(unit)
        .then(vocabs => {
          for(let i = 0; i < vocabs.length; i++){
            this.wordService.findWordById(vocabs[i].word_id)
              .then(result => {
                const index = i;

                vocabs[index].word = result;

                this.wordService.findWordById(vocabs[i].foreign_word_id)
                  .then(result => {
                    const index = i;

                    vocabs[index].foreignWord = result;

                    this.vocabs.push(vocabs[index]);
                  });
              });
          }
        });
    }else{
      this.vocabs = [];
    }
  }

  get filterUnit(){
    return this._filterUnit;
  }

  addVocab(){
    if(this.word && this.foreignWord && this.word.length > 0 && this.foreignWord.length > 0){
      let newWord: Word = new Word(0, this.word, this.filterLanguage.id);
      let newForeignWord: Word = new Word(0, this.foreignWord, this.filterForeignLanguage.id);


    }
  }
}
