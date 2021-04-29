import { Component, OnInit } from '@angular/core';
import { CourseFeed } from '../../interfaces/course-feed';
import { FeedsService } from '../../services/feeds.service';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss', './../../app.component.scss'],
})
export class TabsPage implements OnInit {

  lstCourses: CourseFeed[];

  constructor(private feed: FeedsService) { }

  async ngOnInit() {
    this.lstCourses = await this.feed.getDataBJsonCourse()
  }

}
