import { Component, OnInit } from '@angular/core';
import { Quote } from "../quote";

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    new Quote(1, 'Ronnie', 'Faith','Change the world by being yourself',new Date(),0,0),
    new Quote(1, 'Hillary', 'Hillary', 'Every moment is a fresh beginning',new Date(),0,0),
    new Quote(1, 'Gilbert', 'Gilbert', 'Never regret anything that once made you happy',new Date(),0,0),
    new Quote(1, 'Mercy', 'Mercy','Die with memories not dreams',new Date(),0,0),
    new Quote(1, 'Nickman', 'Nickman', 'Aspire to inspire before we expire',new Date(),0,0),
   
    
  ];
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  deleteQuote(isComplete, index){
    if (isComplete) {
      let toDelete = confirm(`Are you sure you want to delete ${this.quotes[index].name}?`)
      this.quotes.splice(index,1);
    }
  }
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id = quoteLength+1;
    quote.completeDate = new Date(quote.completeDate)
    this.quotes.push(quote)
  }


  

  constructor() { }

  ngOnInit(): void {
  }

}
