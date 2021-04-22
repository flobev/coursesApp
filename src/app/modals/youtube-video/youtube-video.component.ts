import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-youtube-video',
  templateUrl: './youtube-video.component.html',
  styleUrls: ['./youtube-video.component.scss'],
})
export class YoutubeVideoComponent implements OnInit {

  constructor(private modal: ModalController) { }

  ngOnInit() {
    /* const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag); */
    console.log("TestModal"); 
  }

  close() {
    this.modal.dismiss({
        'dismissed': true
    });
  }

}
