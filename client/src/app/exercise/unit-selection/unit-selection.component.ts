import {Component, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-unit-selection',
  templateUrl: 'unit-selection.component.html',
  styleUrls: ['unit-selection.component.css']
})
export class UnitSelectionComponent implements OnInit {

  schooltypes = [
    { id:1, name: "HTL" },
    { id:2, name: "HAK" },
    { id:3 ,name: "AHS" }
    ];

  schoollevel = [
    { id: 1, typeId: 1, name: "1. Jahrgang" },
    { id: 2, typeId: 1, name: "2. Jahrgang" },
    { id: 3, typeId: 2, name: "1. Jahrgang" } ,
    { id: 4, typeId: 2, name: "2. Jahrgang" }
    ];

  languages: [
    { id: 1, name: "Deutsch" },
    { id: 2, name: "Englisch" },
    { id: 3, name: "Spanisch" }
    ];

  units:[
    { id: 1, name: "Unit 1" },
    { id: 2, name: "Unit 2" }
    ];

  selectedSchooltype;
  selectedSchoollevel;
  selectedInputLanguage;
  selectedOutputLanguage;
  selectedUnit;

  constructor() { }

  ngOnInit() {
  }

}
