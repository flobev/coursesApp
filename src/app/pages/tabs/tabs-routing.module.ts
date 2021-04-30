import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [{
      path: 'courses',
      children: [{
        path: '',
        loadChildren: () => import('../courses/courses.module').then(m => m.CoursesPageModule)
      }],
      data: { json: true },
    }, {
      path: 'profil',
      children: [{
        path: '',
        loadChildren: () => import('../profil/profil.module').then(m => m.ProfilPageModule)
      }],
      data: { json: true },
    },
    {
      path: 'order',
      children: [{
        path: '',
        loadChildren: () => import('../order/order.module').then(m => m.OrderPageModule)
      }],
      data: { json: true },
    },
    {
      path: '',
      redirectTo: '/tabs/courses',
      pathMatch: 'full'
    }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/courses',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule { }
