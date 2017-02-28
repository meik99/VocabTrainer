import { Component, OnInit } from '@angular/core';
import {Schooltype} from "../../../models/Schooltype";
import {SchooltypeService} from "../../../services/schooltype.service";

@Component({
  selector: 'app-type-selection',
  templateUrl: './type-selection.component.html',
  styleUrls: ['./type-selection.component.css']
})
export class TypeSelectionComponent implements OnInit {

  private schooltypes: Schooltype[] = [];
  private selectedSchooltype: Schooltype;

  constructor(private schooltypeService: SchooltypeService) { }

  ngOnInit() {
    this.schooltypeService.findAllSchooltypes()
      .then(types => this.schooltypes = types)
      .catch(error => {
          if(error)
            console.log(error.message);
          else
            console.log(error);
        }
      );
  }

  selectSchooltype(typ: Schooltype): void{
    this.selectedSchooltype = typ;
  }
}
