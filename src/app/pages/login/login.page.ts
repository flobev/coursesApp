import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { LoadingController, ModalController, Platform } from '@ionic/angular';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { Router } from '@angular/router';
import { ForgotPasswordComponent } from 'src/app/modals/forgot-password/forgot-password.component';

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
    private modal: ModalController,
    private router: Router,
    private loading: LoadingController,
    private platform: Platform,
    private storage: NativeStorage,
  ) { }

  async ngOnInit() {
    /* let token;
    // Si plateforme est Desktop alors récupération de la variable token
    if (this.platform.is("desktop")) {
      token = localStorage.getItem('token')
    } else {
      token = await this.storage.getItem('token')
    }
    (token == null) ? console.log("Token vide !") : console.log(token);

    //Si token est renseigné alors direction la vue tabs
    if (token !== undefined && token !== null)
      this.router.navigate(['/tabs']) */
  }

  checkEmail() {
    const regex = new RegExp(/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g);
    // this.isErrorMail = !regex.test(this.email);
    this.isErrorMail = (regex.test(this.email.trim())) ? false : true;
  }

  //Affiche le modal ForgotPasswordComponent
  async forgotPassword() {
    const modal = await this.modal.create({
      component: ForgotPasswordComponent,
      componentProps: {
        'emailer': this.email
      }
    });
    return await modal.present();
  }

  async loginForm() {
    let email;
    let password;

    email = localStorage.setItem('email', this.email);
    password = localStorage.setItem('mdp', this.pass);

    console.log('Email stocké = ' + localStorage.getItem('email'));

    console.log('Mot de passe stocké = ' + localStorage.getItem('mdp'));
  }
}
