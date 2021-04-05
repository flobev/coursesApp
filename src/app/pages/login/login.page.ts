import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { LoadingController, Platform } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string = '';
  pass: string = '';

  isErrorMail: boolean = true;

  constructor(
    private loading: LoadingController,
    private platform: Platform,
    private localStorage: NativeStorage,
  ) { }

  async ngOnInit() {
    console.log(this.platform.platforms());
  }

  checkEmail() {
    const regex = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g);
    // this.isErrorMail = !regex.test(this.email);
    this.isErrorMail = (regex.test(this.email.trim())) ? false : true;
  }

  async loginForm() {
    const load = await this.loading.create({
      message: 'Please wait...',
    });
    await load.present();
    console.log('Email : ' + this.email, 'Mdp :' + this.pass);

    localStorage.setItem('email',this.email);
    localStorage.setItem('mdp',this.pass);

    console.log('Données stockées = ' + localStorage.getItem('email'));

    await this.loading.dismiss();
  }
}
