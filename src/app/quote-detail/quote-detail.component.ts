import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
import { Quote } from "../quote";

@Component({
  selector: 'app-quote-detail',
  templateUrl: './quote-detail.component.html',
  styleUrls: ['./quote-detail.component.css']
})
export class QuoteDetailComponent implements OnInit {
  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();
  upvote:number=0;
  downvote:number=0;

  quoteComplete(complete:boolean){
    this.isComplete.emit(complete);
  }
  quoteDelete(complete:boolean){
    this.isComplete.emit(complete);
  }
  upVote(){
    this.quote.upvote+=1;
  }
  downVote(){
    this.quote.downvote+=1;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
