import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  // encapsulation: ViewEncapsulation.ShadowDom
})
export class AppComponent {
  prenom = 'Jean';

  colors = ['purple', 'lightcyan', 'coral'];
  selectedcolor = 'coral';
}
