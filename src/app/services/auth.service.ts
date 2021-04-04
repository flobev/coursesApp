import { LoginPage } from './../pages/login/login.page';
import { Injectable } from '@angular/core';
import { UserRegister } from '../interfaces/user-register';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userLogin : LoginPage;
  userRegis : UserRegister;

  constructor() { }

  /* register(user: UserRegister) {
    (this.userLogin.email == user.email && this.userLogin.pass == user.password) ? true : false ;
  } */

  /* login(email: string, password: string) {
    (email == userRegis. && password == userRegis.password) ? true : false ;
  } */
}
