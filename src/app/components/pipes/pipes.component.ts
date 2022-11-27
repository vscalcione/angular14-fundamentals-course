import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent implements OnInit {
  today = Date.now();
  yourMoney: number = 1200;
  yourBitcoins: number = 0.1234242;
  yourJSON = {
    id: 1,
    name: 'Fabio',
  };

  constructor() {}

  ngOnInit(): void {}
}
