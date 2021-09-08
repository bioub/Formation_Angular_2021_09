import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  prenom = 'Jean';

  colors = ['purple', 'lightcyan', 'coral'];
  selectedcolor = 'coral';
}
