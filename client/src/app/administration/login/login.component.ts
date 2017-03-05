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
    this.username="";
    this.password="";
    this.login(false);
  }

  login(setWrongPassword: boolean): void{
      console.log(this.username, this.password);

      if(this.username != undefined && this.password != undefined){
        this.authService.login({username: this.username, password: this.password})
          .then(result => {
            console.log(result);
            if(result && result.authenticated){
              this.router.navigate(["/administration/manage", {outlets: {management: "profile"}}]);
            }else{
              if(setWrongPassword) {
                this.wrongPassword = true;
              }
            }
            this.username = "";
            this.password = "";
          })
          .catch(error => {
            if(!error.status || error.status == 0){
              this.router.navigateByUrl("error");
            }
            this.username = "";
            this.password = "";
          });
      }
  }

}
