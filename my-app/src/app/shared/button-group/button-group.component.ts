import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button-group',
  templateUrl: './button-group.component.html',
  styleUrls: ['./button-group.component.css']
})
export class ButtonGroupComponent implements OnInit {

  @Input() selected = '';
  @Input() values = ['yellow', 'orange', 'green'];
  @Output() selectedChange = new EventEmitter<string>();

  constructor() {
  }

  ngOnInit(): void {
    if (!this.values.length) {
      throw new Error('values is mandatory');
    }

    if (!this.selected) {
      this.selected = this.values[0];
    }
  }

  select(value: string) {
    this.selected = value;
    this.selectedChange.emit(this.selected);
  }

}
