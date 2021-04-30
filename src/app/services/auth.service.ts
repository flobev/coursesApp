import { LoginPage } from './../pages/login/login.page';
import { Injectable } from '@angular/core';
import { UserRegister } from '../interfaces/user-register';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { XmlParser } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private nativeStorage: NativeStorage) { }

  register(user: UserRegister) {

    const userData = {
      firstName: user.first_name,
      lastName: user.last_name,
      phone: user.phone,
      mail: user.email,
      password: user.password,
      confirm_password: user.confirm_password
    }

    const jsonArr = JSON.stringify(userData);

    // save to localStorage
    localStorage.setItem("User", jsonArr);

    // get the string
    // from localStorage
    const str = localStorage.getItem("User");

    // convert string to valid object
    const parsedArr = JSON.parse(str);

    console.log(parsedArr);

    return new Promise((resolve, rejects) => {
      console.log(parsedArr);
    });

    let lstUsersData = [];
    lstUsersData.push(parsedArr);

    /* //Conversion de l'interface en liste
    const mapped = Object.keys(user).map(Key => ({ type: Key, value: user[Key] }));
    return new Promise((resolve, rejects) => {
      console.log(mapped);
    }); */

    /* return new Promise((resolve, rejects) => {
      this.http.post(this.url + '/signup', user).subscribe((data: any) => {
        (!data.success) ? rejects(data.message) : resolve(data);
      });
    }); */
  }
}
