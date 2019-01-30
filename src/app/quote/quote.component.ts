import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote'
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes = [
    new Quote(1,'A word to the wise is sufficient','Created by', 'Dickens',new Date(2019,1,1)),
    new Quote(2,'Oh what a tangled web we weave when first we practice to deceive.','Created by','Sir Walter Scott',new Date(2019,1,1)),
    new Quote(3,'Examine what is said, not him who speaks.','Created by','Arabian proverb',new Date(2019,1,1)),
    new Quote(4,'I not only use all the brains I have, but all that I can borrow.','Created by','Woodrow Wilson',new Date(2019,1,1))
];
  toogleDetails(index){
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
}

  deleteQuote(isComplete,index){
    if (isComplete){
        let toDelete=confirm(`Are you sure you want to delete ${this.quotes[index].name}`);
        
        if(toDelete){
            this.quotes.splice(index,1)
        }}}
  addNewQuote(quote){
    let quoteLength = this.quotes.length;
    quote.id=quoteLength+1;
    this.quotes.unshift(quote)
  
  }



DeleteQuote(isComplete, index){
  if (isComplete){
      this.quotes.splice(index, 1);
      }
    }
  ngOnInit() {
  }

}

