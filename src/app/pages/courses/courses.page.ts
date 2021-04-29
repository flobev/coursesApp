import { CourseContentComponent } from '../../modals/course-contents/course-content.component';
import { ModalController } from '@ionic/angular';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { FeedsService } from '../../services/feeds.service';
import { CourseFeed } from '../../interfaces/course-feed';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss', './../../app.component.scss'],
})
export class CoursesPage implements OnInit {

  lstCourses: CourseFeed[];

  constructor(private router: Router, private route: ActivatedRoute, private feed: FeedsService, private modal: ModalController) { }

  //Lie les données json à l'interface
  async ngOnInit() {
    this.lstCourses = await this.feed.getDataBJsonCourse()
    this.router.events.subscribe(async (event) => {
      if (event instanceof NavigationEnd) {
        this.lstCourses = (this.route.snapshot.data.json) ? await this.feed.getDataBJsonCourse() : null
      }
    });
  }

  //Récupère les données du cours choisi et redirige vers la modal
  async goToCourseContent(event, course) {
    const modal = await this.modal.create({
      component: CourseContentComponent,
      componentProps: {
        'courses': course
      }
    });
    return await modal.present();
  }
}
