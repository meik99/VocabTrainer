import { Component, OnInit } from '@angular/core';
import {SchooltypeService} from "../../../services/schooltype.service";
import {Schooltype} from "../../../models/Schooltype";

@Component({
  selector: 'app-manage-types',
  templateUrl: './manage-types.component.html',
  styleUrls: ['./manage-types.component.css']
})
export class ManageTypesComponent implements OnInit {
  private schooltypes: Schooltype[] = [];

  private schooltype: string = "";

  constructor(
    private typeService: SchooltypeService
  ) { }

  ngOnInit() {
    this.typeService.findAllSchooltypes()
      .then(result => this.schooltypes = result);
  }

  getSchooltypes(): Schooltype[]{
    return this.schooltypes.filter(t => t.description.toLowerCase().indexOf(this.schooltype.toLowerCase()) >= 0)
      .sort((a,b) => a.description.localeCompare(b.description));
  }

}
