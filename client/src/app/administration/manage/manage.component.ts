import { Component, OnInit } from '@angular/core';
import {User} from "../../models/User";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.css']
})
export class ManageComponent implements OnInit {
  user: User;

  constructor(private authenticationService: AuthenticationService) { }

  ngOnInit() {
    this.user = this.authenticationService.getSessionUser();
  }

}
