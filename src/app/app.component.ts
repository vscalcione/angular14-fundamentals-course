import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'myapp';
  visible: boolean = true;
  users = ['fabio', 'lorenzo', 'simone'];
  url?: string | null;

  clickHandler(event: MouseEvent) {
    console.log(event);
  }

  inputHandler(event: Event) {
    const target: HTMLInputElement = <HTMLInputElement>event.target;
    console.log(target.value);
  }

  toggle() {
    this.visible = !this.visible;
  }

  loadImage() {
    this.url = 'https://angular.io/assets/images/logos/angular/angular.png';
  }

  unloadImage() {
    this.url = null;
  }
}
