import {Component, OnInit, Input} from '@angular/core';
import {AuthenticationService} from "../../services/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public username: string;
  public password: string;
  public wrongPassword: boolean = false;

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.username="a";
    this.password="a";
    this.login(false);
  }

  login(setWrongPassword: boolean): void{
    if(this.username && this.password){
      console.log("Hola");
      console.log(this.username, this.password);

      this.authService.login({username: this.username, password: this.password})
        .then(result => {
          console.log(result);
          if(result && result.authenticated){
            this.router.navigateByUrl("/administration/manage");
          }else{
            if(setWrongPassword) {
              this.wrongPassword = true;
            }
          }
          this.username = "";
          this.password = "";
        });
    }
  }

}
