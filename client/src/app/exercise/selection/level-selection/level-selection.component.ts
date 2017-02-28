import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import {Schooltype} from "../../../models/Schooltype";
import {Level} from "../../../models/Level";
import {SchoollevelService} from "../../../services/schoollevel.service";

@Component({
  selector: 'app-level-selection',
  templateUrl: './level-selection.component.html',
  styleUrls: ['./level-selection.component.css']
})
export class LevelSelectionComponent implements OnInit, OnChanges {

  @Input()
  private schooltype: Schooltype;

  private schoolLevels: Level[] = [];
  private selectedLevel: Level;

  constructor(private schoollevelService: SchoollevelService) {

  }

  ngOnInit() {
    this.updateLevels();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.selectedLevel = null;
    this.updateLevels();
  }

  updateLevels():void{
    this.schoollevelService.findSchoollevelsForType(this.schooltype)
      .then(levels => this.schoolLevels = levels)
      .catch(error => console.log(error));
  }

}
