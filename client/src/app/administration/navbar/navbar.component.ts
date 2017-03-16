import {Component, OnInit, OnChanges, SimpleChanges, AfterViewInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "../../services/authentication.service";

@Component({
  selector: 'app-management-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class ManagementNavbarComponent implements OnInit, OnChanges, AfterViewInit {

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngAfterViewInit(): void {
  }

  logout(){
    this.authService.logout();
    this.router.navigate(["administration"]);
  }
}
