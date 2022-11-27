import { Component } from '@angular/core';
import { Utility } from './services/utility';
import { HttpClient } from '@angular/common/http';
import { User } from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'myapp';
  url: string = 'https://jsonplaceholder.typicode.com/users';
  users?: User[];

  constructor(http: HttpClient, utils: Utility) {
    const response = utils.add(1, 5);
    console.log('Usage of an dependency injection', response);

    http.get<User[]>(this.url).subscribe((result: any) => {
      this.users = result;
    });
  }
}
