import { Component, OnInit } from '@angular/core';
import { FeedsService } from '../../services/feeds.service';
import { CourseFeed } from '../../interfaces/course-feed';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Platform } from '@ionic/angular';
import { OrderService } from '../../services/order.service';
import { CourseContentComponent } from '../../modals/course-contents/course-content.component';

@Component({
  selector: 'app-order',
  templateUrl: './order.page.html',
  styleUrls: ['./order.page.scss', './../../app.component.scss'],
})
export class OrderPage implements OnInit {

  courses: CourseFeed[];
  newCourse: CourseFeed = <CourseFeed>{};

  constructor(private router: Router, private feed: FeedsService, private route: ActivatedRoute, private plt: Platform, private orderS: OrderService) { }

  async ngOnInit() {
    this.courses = await this.feed.getDataBJsonCourse()
    this.router.events.subscribe(async (event) => {
      if (event instanceof NavigationEnd) {
        this.courses = (this.route.snapshot.data.json) ? await this.feed.getDataBJsonCourse() : null
      }
    });
  }




}
