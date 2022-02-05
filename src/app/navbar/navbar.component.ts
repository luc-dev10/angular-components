import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isToggled: boolean = false;

  urlLinks = [
    {
      title: 'Services',
      path: 'services',
      class: '',
    },
    {
      title: 'Reviews',
      path: 'reviews',
      class: '',
    },
    {
      title: 'Pricing',
      path: 'pricing',
      class: '',
    },
    {
      title: 'About',
      path: 'about',
      class: '',
    },
  ];

  // check if toggled
  toggleOnClick() {
    // update toggle
    this.isToggled = !this.isToggled;
  }

  // current link
  onActivate(title: String) {
    this.urlLinks.forEach((obj) => {
      if (title != obj.title) obj.class = '';
      else obj.class = 'active';
    });
  }

  onRemoveAllActiveLinks() {
    this.urlLinks.forEach((obj) => {
      obj.class = '';
    });
  }

  constructor() {}

  ngOnInit(): void {}
}
