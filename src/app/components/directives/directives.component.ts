import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent implements OnInit {
  visible: boolean = true;

  users = ['fabio', 'lorenzo', 'simone'];

  constructor() {}

  ngOnInit(): void {}

  toggle() {
    this.visible = !this.visible;
  }
}
