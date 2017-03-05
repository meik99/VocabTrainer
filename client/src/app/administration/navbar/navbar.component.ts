import {Component, OnInit, OnChanges, SimpleChanges, AfterViewInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-management-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class ManagementNavbarComponent implements OnInit, OnChanges, AfterViewInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngAfterViewInit(): void {
  }


}
