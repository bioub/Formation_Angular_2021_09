import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.css']
})
export class ButtonGroupComponent implements OnInit {

  selected = 'yellow';
  values = ['yellow', 'orange', 'green'];

  constructor() { }

  ngOnInit(): void {
  }

  select(value: string) {
    this.selected = value;
  }

}
