import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  @Input() name = 'Romain';
  @Output() nameChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  updateName(event: Event) {
    this.name = (event.target as HTMLInputElement).value;
    this.nameChange.emit(this.name);
  }
}
