import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { TabsPageRoutingModule } from './tabs-routing.module';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
  path: 'menu',
  component: TabsPage,
  children: [
  {
  path: 'home',
  loadChildren: '../home/home.module#HomePageModule'
  },
  {
  path: 'login',
  loadChildren: '../login/login.module#LoginPageModule'
  },
  {
  path: 'register',
  loadChildren: '../register/register.module#RegisterPageModule'
  },
  {
  path: 'contact',
  loadChildren: '../contact/contact.module#ContactPageModule'
  }
  ]
  },
  {
  path: '',
  redirectTo: './home'
  }
];

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    RouterModule.forChild(routes)
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
