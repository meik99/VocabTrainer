import {Component, OnInit, Input} from '@angular/core';
import {Level} from "../../../models/Level";
import {Language} from "../../../models/Language";

@Component({
  selector: 'app-unit-selection',
  templateUrl: './unit-selection.component.html',
  styleUrls: ['./unit-selection.component.css']
})
export class UnitSelectionComponent implements OnInit {
  @Input()
  schoollevel: Level;
  @Input()
  inputLanguage: Language;
  @Input()
  outputLanguage: Language;

  constructor() { }

  ngOnInit() {
  }

}
