import { Component, OnInit } from '@angular/core';
import {Schooltype} from "../../../models/Schooltype";
import {SchooltypeService} from "../../../services/schooltype.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-type-selection',
  templateUrl: './type-selection.component.html',
  styleUrls: ['./type-selection.component.css']
})
export class TypeSelectionComponent implements OnInit {

  private schooltypes: Schooltype[] = [];
  private selectedSchooltype: Schooltype;
  private error: any = null;

  constructor(
    private schooltypeService: SchooltypeService,
    private router: Router) { }

  ngOnInit() {
    this.schooltypeService.findAllSchooltypes()
      .then(types => this.schooltypes = types)
      .catch(error => {
          if(error)
            console.log(error.message);
          else
            console.log(error);
          if(!error.status || error.status == 0)
            this.router.navigateByUrl("error");
        }
      );
  }

  selectSchooltype(typ: Schooltype): void{
    this.selectedSchooltype = typ;
  }
}
