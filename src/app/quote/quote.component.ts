import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote('God is good!', 'Bible', 'Peter'),
    new Quote('Work hard.', 'Me', 'Melvin'),
  ]

  constructor() { }

  ngOnInit() {
  }

}
