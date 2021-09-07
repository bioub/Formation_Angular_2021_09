import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-state-button',
  templateUrl: './multi-state-button.component.html',
  styleUrls: ['./multi-state-button.component.css']
})
export class MultiStateButtonComponent implements OnInit {

  selected = 'yellow';
  values = ['yellow', 'orange', 'green'];

  constructor() { }

  ngOnInit(): void {
  }

  selectNext() {
    const index = this.values.indexOf(this.selected);
    this.selected = this.values[(index + 1) % this.values.length];
  }

}
