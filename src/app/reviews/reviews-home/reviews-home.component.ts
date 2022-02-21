import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reviews-home',
  templateUrl: './reviews-home.component.html',
  styleUrls: ['./reviews-home.component.css'],
})
export class ReviewsHomeComponent implements OnInit {
  data = [
    {
      name: 'joe',
      age: 24,
      job: 'strugling artist',
    },
    {
      name: 'jane',
      age: 27,
      job: 'engineer',
    },
    {
      name: 'mary',
      age: 20,
      job: 'student',
    },
  ];

  header = [
    {
      key: 'name',
      label: 'name',
    },
    {
      key: 'age',
      label: 'age',
    },
    {
      key: 'job',
      label: 'job',
    },
  ];

  isModalOn: boolean = false;
  onClick() {
    this.isModalOn = !this.isModalOn;
  }

  constructor() {}

  ngOnInit(): void {}
}
