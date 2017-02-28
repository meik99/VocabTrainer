import {Component, OnInit, Output} from '@angular/core';
import {SchooltypeService} from "../../services/schooltype.service";
import {Schooltype} from "../../models/Schooltype";

@Component({
  selector: 'app-unit-selection',
  templateUrl: 'unit-selection.component.html',
  styleUrls: ['unit-selection.component.css'],

})
export class UnitSelectionComponent implements OnInit {

  private schooltypes: Schooltype[] = [];

  private schoollevel = [
    { id: 1, typeId: 1, name: "1. Jahrgang" },
    { id: 2, typeId: 1, name: "2. Jahrgang" },
    { id: 3, typeId: 2, name: "1. Kindergarten" } ,
    { id: 4, typeId: 2, name: "2. Kindergarten" },
    { id: 5, typeId: 3, name: "1. Klasse" } ,
    { id: 6, typeId: 3, name: "2. Klasse" }
    ];

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

  selectedSchooltype = {};
  selectedSchoollevel = {};
  selectedInputLanguage = {};
  selectedOutputLanguage = {};
  selectedUnit = {};

  getSchooltypes(){
    return this.schooltypes;
  }

  getSchoollevel(typeId : number){
    return this.schoollevel.filter(level => level.typeId == typeId);
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

  constructor(private schooltypeService: SchooltypeService) { }

  ngOnInit() {
    this.schooltypeService.findAllSchooltypes()
      .then(types => this.schooltypes = types)
      .catch(error => {
        if(error)
          console.log(error.message);
        else
          console.log(error);
      }
    );
  }

}
