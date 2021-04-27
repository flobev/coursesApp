import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Platform, LoadingController } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  userMail: string;
  userPassword: string;

  constructor(private auth: AuthService, private platform: Platform, private storage: NativeStorage, private router: Router, private loading: LoadingController) { }

  async ngOnInit() {
    const load = await this.loading.create({
      message: 'Please wait...',
    });
    await load.present();
    localStorage.setItem('name', "flo")
    /* localStorage.setItem('user', JSON.stringify(user.user)) */

    console.log(this.platform.platforms())
    let token;
    token = localStorage.getItem('name')
    console.log(token);
    await this.loading.dismiss();
  }


  getUser(mail, password) {
    localStorage.setItem('mail', mail)
    localStorage.setItem('password', password)
  }
}
