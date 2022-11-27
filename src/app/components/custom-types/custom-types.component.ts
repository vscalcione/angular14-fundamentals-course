import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/model/user';

@Component({
  selector: 'app-custom-types',
  templateUrl: './custom-types.component.html',
  styleUrls: ['./custom-types.component.css'],
})
export class CustomTypesComponent implements OnInit {
  jsonUsers: User[];

  constructor() {
    this.jsonUsers = [
      { id: 1, name: 'Fabio' },
      { id: 2, name: 'Lorenzo' },
      { id: 3, name: 'Simone' },
    ];
    this.jsonUsers.push({ id: 1234, name: 'hello' });
  }

  ngOnInit(): void {}
}
