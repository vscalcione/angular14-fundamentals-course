import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-handlers',
  templateUrl: './handlers.component.html',
  styleUrls: ['./handlers.component.css'],
})
export class HandlersComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  clickHandler(event: MouseEvent) {
    console.log(event);
  }

  inputHandler(event: Event) {
    const target: HTMLInputElement = <HTMLInputElement>event.target;
    console.log(target.value);
  }
}
