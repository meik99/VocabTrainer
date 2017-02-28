import { Component, OnInit } from '@angular/core';
import {UnitSelectionComponent} from "./unit-selection/unit-selection.component";
import {ExerciseUnitComponent} from "./exercise-unit/exercise-unit.component";

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {
  private unitSelection : UnitSelectionComponent;
  private exerciseUnit : ExerciseUnitComponent;

  constructor() { }

  ngOnInit() {

  }



}
