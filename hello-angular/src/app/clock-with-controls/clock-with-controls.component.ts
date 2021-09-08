import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock-with-controls',
  templateUrl: './clock-with-controls.component.html',
  styleUrls: ['./clock-with-controls.component.css']
})
export class ClockWithControlsComponent implements OnInit {

  show = true;
  format = 'HH:mm:ss';
  delay = 1000;

  constructor() { }

  ngOnInit(): void {
  }

}
