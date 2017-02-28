import {Component, OnInit, Input} from '@angular/core';
import {Schooltype} from "../../../models/Schooltype";
import {Level} from "../../../models/Level";
import {SchoollevelService} from "../../../services/schoollevel.service";

@Component({
  selector: 'app-level-selection',
  templateUrl: './level-selection.component.html',
  styleUrls: ['./level-selection.component.css']
})
export class LevelSelectionComponent implements OnInit {
  @Input()
  private schooltype: Schooltype;

  private schoolLevels: Level[] = [];
  private selectedLevel: Level;

  constructor(private schoollevelService: SchoollevelService) { }

  ngOnInit() {
    this.schoollevelService.findSchoollevelsForType(this.schooltype)
      .then(levels => this.schoolLevels = levels)
      .catch(error => console.log(error));
  }

}
