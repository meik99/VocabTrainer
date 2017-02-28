import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Level} from "../../../models/Level";
import {Language} from "../../../models/Language";
import {Unit} from "../../../models/Unit";
import {UnitService} from "../../../services/unit.service";

@Component({
  selector: 'app-unit-selection',
  templateUrl: './unit-selection.component.html',
  styleUrls: ['./unit-selection.component.css']
})
export class UnitSelectionComponent implements OnInit, OnChanges {

  @Input()
  schoollevel: Level;
  @Input()
  inputLanguage: Language;
  @Input()
  outputLanguage: Language;

  units: Unit[];
  selectedUnit: Unit;

  constructor(
    private unitService: UnitService
  ) { }

  ngOnInit() {
    this.updateUnits();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.selectedUnit = null;
    this.updateUnits();
  }

  updateUnits(){
    this.unitService.findUnits(this.schoollevel, this.inputLanguage, this.outputLanguage)
      .then(results => this.units = results);
  }

}
