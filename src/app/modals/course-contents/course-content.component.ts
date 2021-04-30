import { CourseFeed } from '../../interfaces/course-feed';
import { FeedsService } from '../../services/feeds.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { AlertController, ModalController, ToastController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';
import { OrderPage } from '../../pages/order/order.page';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Component({
  selector: 'app-youtube-video',
  templateUrl: './course-content.component.html',
  styleUrls: ['./course-content.component.scss', "./../../app.component.scss"],
})
export class CourseContentComponent implements OnInit {

  @Input() courses: CourseFeed;

  authorVar: string = "";

  constructor(private modal: ModalController, private router: Router, private route: ActivatedRoute, private feed: FeedsService, private toastControll: ToastController) { }

  ngOnInit() {
    /* const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag); */
    console.log(this.courses);
    console.log(typeof (this.courses));
  }

  //Message d'alerte lors de l'ajout d'un cours et envoie du cours au panier
  async addCourseToOrder() {
    /* this.sendCourse(); */
    const toast = await this.toastControll.create({
      message: 'Your course have been saved.',
      duration: 1000
    });
    toast.present();
  }

  async sendCourse() {
    return await this.courses;
  }

  close() {
    this.modal.dismiss({
      'dismissed': true
    });
  }

}
