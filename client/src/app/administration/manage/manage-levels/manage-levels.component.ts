import {Component, OnInit, OnChanges, SimpleChanges} from '@angular/core';
import {Schooltype} from "../../../models/Schooltype";
import {SchooltypeService} from "../../../services/schooltype.service";
import {Level} from "../../../models/Level";
import {SchoollevelService} from "../../../services/schoollevel.service";

@Component({
  selector: 'app-manage-levels',
  templateUrl: './manage-levels.component.html',
  styleUrls: [
    './manage-levels.component.css'
  ]
})
export class ManageLevelsComponent implements OnInit {

  private levels: Level[] = [];
  private types: Schooltype[] = [];
  private allTypes: Schooltype[] = [];

  private schoollevel: string = "";
  private type: Schooltype = null;

  private schoollevelToUpdate: Level = null;
  private schoollevelToDelete: Level = null;

  private updatedLevelname: string = "";
  private updatedLeveltype: Schooltype = null;

  constructor(
    private typeService: SchooltypeService,
    private levelService: SchoollevelService
  ) { }

  ngOnInit() {
    this.typeService.findAllSchooltypes()
      .then(result => {
        this.types = result;
        this.allTypes = result;
      });
    this.updateLevelList();
  }

  getType(level: Level){
    return this.types.find(t => t.id == level.schooltype_id);
  }

  updateLevelList(){
    if(this.type){
      this.levelService.findSchoollevelsForType(this.type)
        .then(result => this.levels = result);
    }else{
      this.levelService.findSchoollevels()
        .then(result => this.levels = result);
    }
  }

  create(){
    if(this.type && this.schoollevel){
      this.levelService.createLevel(
        new Level(-1, this.schoollevel, this.type.id)
      ).then(() => this.updateLevelList());
    }
  }

  cancel(){
    this.schoollevelToDelete = null;
    this.schoollevelToUpdate = null;
  }

  setToUpdate(level: Level){
    this.schoollevelToDelete = null;
    this.updatedLevelname = level.description;
    this.updatedLeveltype = this.types.find(t => t.id == level.schooltype_id);
    this.schoollevelToUpdate = level;
  }

  setToDelete(level: Level){
    this.schoollevelToUpdate = null;
    this.schoollevelToDelete = level;
  }

  delete(level){
    this.schoollevelToDelete = null;
    this.levelService.deleteLevel(level)
      .then(() => this.updateLevelList());
  }

  update(level){
    this.schoollevelToUpdate = null;
    level.description = this.updatedLevelname;
    level.schooltype_id = this.updatedLeveltype.id;
    this.levelService.updateLevel(level)
      .then(() => this.updateLevelList());
  }

}
