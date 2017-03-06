import { Component, OnInit } from '@angular/core';
import {SchooltypeService} from "../../../services/schooltype.service";
import {Schooltype} from "../../../models/Schooltype";

@Component({
  selector: 'app-manage-types',
  templateUrl: './manage-types.component.html',
  styleUrls: [
    './manage-types.component.css'
  ]
})
export class ManageTypesComponent implements OnInit {
  private schooltypes: Schooltype[] = [];

  private schooltype: string = "";
  private schooltypeUpdateDescription: string = "";

  private schooltypeToDelete: Schooltype = null;
  private schooltypeToUpdate: Schooltype = null;

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

  create(){
    if(this.schooltype){
      this.typeService.createSchooltype(new Schooltype(-1, this.schooltype))
        .then(result => this.schooltypes = result)
        .then(() => this.schooltype = "");
    }
  }

  update(schooltype: Schooltype){
    schooltype.description = this.schooltypeUpdateDescription;
    this.typeService.updateSchooltype(schooltype)
      .then(result => this.schooltypes = result);
  }

  setToUpdate(schooltype: Schooltype){
    this.schooltypeUpdateDescription = schooltype.description;
    this.schooltypeToUpdate = schooltype;
  }

  delete(schooltype: Schooltype){
    this.schooltypeToDelete = null;
    this.typeService.deleteSchooltype(schooltype)
      .then(result => this.schooltypes = result);
  }

  setToDelete(schooltype: Schooltype){
    this.schooltypeToDelete = schooltype;
  }

  cancel(){
    this.schooltypeToDelete = null;
    this.schooltypeToUpdate = null;
  }
}
