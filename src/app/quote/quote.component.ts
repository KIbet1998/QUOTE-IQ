import { Component, OnInit } from '@angular/core';
import { Quote } from "../quote";

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes:Quote[] = [
    new Quote(1, 'Ronnie', 'Kennedy','Change the world by being yourself',new Date()),
    new Quote(1, 'Ronnie', 'Hillary', 'Every moment is a fresh beginning',new Date()),
    new Quote(1, 'Ronnie', 'Gilbert', 'Never regret anything that once made you happy',new Date()),
    new Quote(1, 'Ronnie', 'Mercy','Die with memories not dreams',new Date()),
    new Quote(1, 'Ronnie', 'Nickman', 'Aspire to inspire before we expire',new Date()),
   
    
  ];
  toggleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  completeQuote(isComplete, index){
    if (isComplete) {
      this.quotes.splice(index,1);
    }
  }


  

  constructor() { }

  ngOnInit(): void {
  }

}
