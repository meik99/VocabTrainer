import {Component, OnInit, Input} from '@angular/core';
import {Unit} from "../../models/Unit";
import {Language} from "../../models/Language";

@Component({
  selector: 'app-exercise-unit',
  templateUrl: 'exercise-unit.component.html',
  styleUrls: ['exercise-unit.component.css']
})
export class ExerciseUnitComponent implements OnInit {

  @Input()
  unit: Unit;
  @Input()
  inputLanguage: Language;
  @Input()
  outputLanguage: Language;

  constructor() { }

  ngOnInit() {
  }

}
