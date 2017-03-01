import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username: string;
  public password: string;

  constructor(
  ) { }

  ngOnInit() {
  }

  login(): void{
    console.log(this.username);
    console.log(this.password);
  }

}
