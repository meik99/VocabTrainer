import {Component, OnInit, Output} from '@angular/core';
import {SchooltypeService} from "../../services/schooltype.service";
import {Schooltype} from "../../models/Schooltype";
import {SchoollevelService} from "../../services/schoollevel.service";
import {Level} from "../../models/Level";

@Component({
  selector: 'app-selection',
  templateUrl: 'selection.component.html',
  styleUrls: ['selection.component.css'],

})
export class SelectionComponent implements OnInit {


  private schoollevels: Level[] = [];

  private languages = [
    { id: 1, typeId: 1, levelId: 1, name: "Deutsch" },
    { id: 2, typeId: 1, levelId: 1,  name: "Englisch" },
    { id: 1, typeId: 1, levelId: 2, name: "Deutsch" },
    { id: 2, typeId: 1, levelId: 2,  name: "Englisch" },
    { id: 2, typeId: 1, levelId: 2,  name: "Spanisch" },
    { id: 3, typeId: 2, levelId: 3, name: "Spanisch" }
    ];

  private units = [
    { id: 1, typeId: 1, levelId: 1, inputLangId: 1, outputLangId: 2, name: "Unit 1" },
    { id: 2, typeId: 1, levelId: 1, inputLangId: 1, outputLangId: 2, name: "Unit 2" },
    ];

  selectedSchooltype: Schooltype;
  selectedSchoollevel: Level;
  selectedInputLanguage = {};
  selectedOutputLanguage = {};
  selectedUnit = {};

  getSchoollevel(typeId : number){
  }

  getLanguages(typeId: number, levelId: number){
    return this.languages.filter(language => language.typeId == typeId && language.levelId == levelId);
  }

  isSelectedInputLanguage(langId: number){
    return langId == this.selectedInputLanguage;
  }

  getUnits(schoolTypeId: number, schoolLevelId: number, inputLanguageId: number, outputLanguageId: number){
    return this.units.filter(unit => unit.typeId == schoolTypeId && unit.levelId == schoolLevelId
      && unit.inputLangId == inputLanguageId && unit.outputLangId == outputLanguageId);
  }

  constructor(
    private schooltypeService: SchooltypeService,
    private schoollevelService: SchoollevelService) { }

  ngOnInit() {

  }



}
