import {Component, OnInit, Input} from '@angular/core';
import {SelectionComponent} from "./selection/selection.component";
import {ExerciseUnitComponent} from "./exercise-unit/exercise-unit.component";
import {Unit} from "../models/Unit";

@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.css']
})
export class ExerciseComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }



}
