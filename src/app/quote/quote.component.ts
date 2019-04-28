import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(1, 'God is good', 'Bible', 'Peter', new Date(2018,3,14)),
    new Quote(2, 'Work hard.', 'Me', 'Melvin', new Date(2018,5,6)),
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

  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id=quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }

  likeFunction(index) {
    this.quotes[index].count1 += 1;
  }
  dislikeFunction(index) {
    this.quotes[index].count2 += 1;
  }

  constructor() { }

  ngOnInit() {
  }

}
