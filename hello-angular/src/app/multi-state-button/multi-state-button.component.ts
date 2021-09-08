import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-state-button',
  templateUrl: './multi-state-button.component.html',
  styleUrls: ['./multi-state-button.component.css']
})
export class MultiStateButtonComponent implements OnInit {

  @Input() selected = '';
  @Input() values = ['yellow', 'orange', 'green'];

  constructor() {
    console.log('selected (constructor)', this.selected);
  }

  ngOnInit(): void {
    console.log('selected (ngOnInit)', this.selected);
    if (!this.values.length) {
      throw new Error('values is mandatory');
    }

    if (!this.selected) {
      this.selected = this.values[0];
    }
  }

  selectNext() {
    const index = this.values.indexOf(this.selected);
    this.selected = this.values[(index + 1) % this.values.length];
  }

}
