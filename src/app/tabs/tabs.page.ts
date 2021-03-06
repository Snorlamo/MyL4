import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})

export class TabsPage implements OnInit {

  activePath = '';
  pages = [
    {
      name: 'Login',
      path: '/menu/login'
    },
    {
      name: 'Register',
      path: '/menu/register'
    },
    {
      name: 'Contact',
      path: '/menu/contact'
    },
    {
      name: 'Home',
      path: '/tabs'
    }
];
 constructor(private router: Router) {
  this.router.events.subscribe((event: RouterEvent) => {
    this.activePath = event.url;
  });
 }

  ngOnInit() {
  }

}

