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
    let realquote = new Quote(0,"","","",new Date());
    quote.id=quoteLength+1;
    realquote.id= quote.id;
    realquote.completeDate = new Date(quote.completeDate)
    realquote.author = quote.author;
    realquote.count1 = quote.count1;
    realquote.count2 = quote.count2;
    realquote.quote = quote.quote;
    realquote.showDescription = quote.showDescription;
    realquote.submit = quote.submit;

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
