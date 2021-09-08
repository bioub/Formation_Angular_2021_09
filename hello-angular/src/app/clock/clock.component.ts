import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.css'],
})
export class ClockComponent implements OnInit, OnDestroy, OnChanges {
  now = new Date();

  @Input() format = 'HH:mm:ss';
  @Input() delay = 1000;

  private interval: any;

  constructor() {}

  ngOnInit(): void {
    this.interval = setInterval(() => {
      this.now = new Date();
    }, Number(this.delay));
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes.delay.firstChange && changes.delay.currentValue !== changes.delay.previousValue) {
      clearInterval(this.interval);
      this.interval = setInterval(() => {
        this.now = new Date();
      }, Number(this.delay));
    }
  }

  ngOnDestroy(): void {
    clearInterval(this.interval);
    // API création / arrêt
    // setInterval / clearInterval
    // addEventListener / removeEventListener
    // new Worker / destroy
    // new WebSocket / close
  }
}
