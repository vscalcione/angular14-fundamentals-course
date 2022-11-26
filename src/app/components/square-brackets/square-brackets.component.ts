import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-square-brackets',
  templateUrl: './square-brackets.component.html',
  styleUrls: ['./square-brackets.component.css'],
})
export class SquareBracketsComponent implements OnInit {
  url?: string | null;
  constructor() {}

  ngOnInit(): void {}

  loadImage() {
    this.url = 'https://angular.io/assets/images/logos/angular/angular.png';
  }

  unlaodImage() {
    this.url = null;
  }
}
