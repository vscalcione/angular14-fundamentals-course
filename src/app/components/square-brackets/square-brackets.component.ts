import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-square-brackets',
  templateUrl: './square-brackets.component.html',
  styleUrls: ['./square-brackets.component.css'],
})
export class SquareBracketsComponent implements OnInit {
  constructor() {}

  url?: string | null;

  ngOnInit(): void {}

  loadImage() {
    this.url = 'https://angular.io/assets/images/logos/angular/angular.png';
  }

  unloadImage() {
    this.url = null;
  }
}
