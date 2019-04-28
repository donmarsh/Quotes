import { Component } from '@angular/core';
import {Quote} from './quote'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  quotes = [
    new Quote(1, 'God is good!', 'Bible', 'Peter', new Date(2018,3,14)),
    new Quote(2, 'Work hard.', 'Me', 'Melvin', new Date(2018,5,6)),
  ]
}
