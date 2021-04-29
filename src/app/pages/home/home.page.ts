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
    //Conversion d'un Objet Json en array (liste)
    //localStorage.setItem('user', JSON.stringify(user.user))

  }
}
