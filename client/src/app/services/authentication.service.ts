import { Injectable } from '@angular/core';
import {BaseService} from "./base.service";
import {Http, RequestOptions, Headers} from "@angular/http";
import {User} from "../models/User";

@Injectable()
export class AuthenticationService extends BaseService{
  header: RequestOptions;

  constructor(private http: Http) {
    super();
    this.header = new RequestOptions();
    this.header.headers = new Headers();
    this.header.headers.append("Content-Type", "application/json");
  }

  login(credentials): Promise<User>{
    if(!this.getSessionUser() || this.getSessionUser().authenticated == false){
      return this.http.post(
        `${this.URL_BASE}administration/login`,
        {username: credentials.username, password: credentials.password},
        this.header)
        .toPromise()
        .then(response => {
          if(response.status === 401){
            return new User(null, false);
          }else{
            localStorage.setItem("user", JSON.stringify(response.json()));
            return response.json() as User;
          }
        })
        .catch(this.handleError);
    }else{
      return Promise.resolve(this.getSessionUser());
    }
  }

  getSessionUser(): User{
    if(localStorage.getItem("user") == null){
      return new User(null, false);
    }else{
      let user = localStorage.getItem("user");
      console.log(user);
      let userObject = JSON.parse(user) as User;
      return userObject;
    }
  }

  logout(){
    localStorage.removeItem("user");
  }

}
