import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [{
      path: 'courses',
      children: [{
        path: '',
        data: { json: false },
        loadChildren: '../courses/courses.module#CoursesPageModule'
      }],
      data: { json: false },
    }, {
      path: 'profil',
      children: [{
        path: '',
        data: { json: true },
        loadChildren: '../profil/profil.module#ProfilPageModule'
      }],
      data: { json: true },
    },
    {
      path: 'order',
      children: [{
        path: '',
        data: { json: true },
        loadChildren: '../order/order.module#OrderPageModule'
      }],
      data: { json: true },
    },
    {
      path: '',
      redirectTo: '/tabs/courses',
      pathMatch: 'full'
    }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule { }
