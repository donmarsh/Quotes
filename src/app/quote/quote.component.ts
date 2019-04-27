import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote('God is good!', 'Bible', 'Peter', new Date(2018,3,14)),
    new Quote('Work hard.', 'Me', 'Melvin', new Date(2018,5,6)),
  ]

  DeleteQuote(isComplete,index){
    if (isComplete){
      let toDelete=confirm('Are you sure you want to delete $(this.quotes[index].quote)?')

      if(toDelete) {
        this.quotes.splice(index,1)
      }
    }
  }

  toogleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }

  constructor() { }

  ngOnInit() {
  }

}
