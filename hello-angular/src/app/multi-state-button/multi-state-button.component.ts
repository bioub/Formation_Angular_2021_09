import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-multi-state-button',
  templateUrl: './multi-state-button.component.html',
  styleUrls: ['./multi-state-button.component.css']
})
export class MultiStateButtonComponent implements OnInit {

  values = ['yellow', 'orange', 'green'];

  constructor() { }

  ngOnInit(): void {
  }

}
