import { Injectable } from '@angular/core';
import { promise } from 'protractor';
import { CourseFeed } from '../interfaces/course-feed';

@Injectable({
  providedIn: 'root'
})

export class OrderService {

  constructor() { }

  /* getCourse(): Promise<CourseFeed[]> {
    return this.storage.get(ITEMS_KEY);
  }

  deleteCourse(id: string) {
    return this.storage.get(ITEMS_KEY).then((courses: CourseFeed[]) => {
      if (!courses || courses.length === 0) {
        return null;
      }

      let toKeep: CourseFeed[] = [];

      for (let i of courses) {
        if (i.id !== id) {
          toKeep.push(i);
        }
      }
      return this.storage.set(ITEMS_KEY, toKeep);
    })
  } */
}
