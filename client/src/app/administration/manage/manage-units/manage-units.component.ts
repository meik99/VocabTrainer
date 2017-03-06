import { Component, OnInit } from '@angular/core';
import {Schooltype} from "../../../models/Schooltype";
import {Level} from "../../../models/Level";
import {Unit} from "../../../models/Unit";
import {SchooltypeService} from "../../../services/schooltype.service";
import {SchoollevelService} from "../../../services/schoollevel.service";
import {UnitService} from "../../../services/unit.service";

@Component({
  selector: 'app-manage-units',
  templateUrl: './manage-units.component.html',
  styleUrls: ['./manage-units.component.css']
})
export class ManageUnitsComponent implements OnInit {
  private unitname: string = "";

  private filterType: Schooltype = null;
  private filterLevel: Level = null;

  private types: Schooltype[] = [];
  private levels: Level[] = [];
  private units: Unit[] = [];

  private filteredUnits: Unit[] = [];

  constructor(
    private typeService: SchooltypeService,
    private levelService: SchoollevelService,
    private unitService: UnitService
  ) { }

  ngOnInit() {
    this.typeService.findAllSchooltypes()
      .then(result => this.types = result);
    this.levelService.findSchoollevels()
      .then(result => this.levels = result);
    this.unitService.findAllUnits()
      .then(result => {
        this.units = result;
        this.filteredUnits = result;
      });
  }

  getTypes(): Schooltype[]{
    if(this.filterLevel){
      return this.types.filter(
        t => t.id == this.filterLevel.schooltype_id
      )
    }else{
      return this.types;
    }
  }

  getLevels(): Level[]{
    if(this.filterType){
      return this.levels.filter(
        l => l.schooltype_id == this.filterType.id
      );
    }else{
      return this.levels;
    }
  }

  setFilterType(type: Schooltype){
    this.filterType = type;
    this.filteredUnits = [];

    if(this.filterType){
      this.unitService.findUnitsByType(this.filterType)
        .then(result => this.filteredUnits = result)
    }else{
        this.filteredUnits = this.units;
    }

  }

  setFilterLevel(level: Level){
    this.filterLevel = level;

    if(level) {
      this.filteredUnits = [];
      this.unitService.findUnitsByLevel(level)
        .then(result => this.filteredUnits = result);
    }else{
      if(this.filterType){
        this.unitService.findUnitsByType(this.filterType)
          .then(result => this.filteredUnits = result);
      }else{
        this.filteredUnits = this.units;
      }
    }
  }


}
