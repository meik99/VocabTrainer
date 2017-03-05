import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-units',
  templateUrl: './manage-units.component.html',
  styleUrls: ['./manage-units.component.css']
})
export class ManageUnitsComponent implements OnInit {
  private unitname: string = "";

  constructor() { }

  ngOnInit() {
  }

}
