import { Component } from '@angular/core';
import { User } from './model/user';
import { Utility } from './services/utility';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'myapp';

  constructor(utils: Utility) {
    const response = utils.add(1, 5);
    console.log(response);
  }
}
