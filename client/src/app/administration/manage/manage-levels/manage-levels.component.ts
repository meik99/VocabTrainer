import { Component, OnInit } from '@angular/core';
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

  private schoollevel: string = "";
  private type: Schooltype = null;

  constructor(
    private typeService: SchooltypeService,
    private levelService: SchoollevelService
  ) { }

  ngOnInit() {
    this.typeService.findAllSchooltypes()
      .then(result => {
        this.types = result;
      });
  }

}
