import { CourseFeed } from './../../interfaces/course-feed';
import { FeedsService } from './../../services/feeds.service';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-youtube-video',
  templateUrl: './youtube-video.component.html',
  styleUrls: ['./youtube-video.component.scss', "./../../app.component.scss"],
})
export class YoutubeVideoComponent implements OnInit {

  @Input() courses: CourseFeed[];

  authorVar: string = "";

  constructor(private modal: ModalController, private router:Router, private route:ActivatedRoute, private feed:FeedsService) { }

  ionViewWillEnter() {
    console.log("ionViewWillEnter");
  }

  ngOnInit() {
    /* const tag = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';
    document.body.appendChild(tag); */
    console.log(this.courses);
    
  }

  author(){
    this.courses.forEach(e => {
      this.authorVar = e.author;
    });
    return this.authorVar;
  }

  getCourses(){
    return this.courses;
  }

  close() {
    this.modal.dismiss({
        'dismissed': true
    });
  }

}
