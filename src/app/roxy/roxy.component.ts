import { Component, OnInit } from '@angular/core';
import {quotes} from '../quotes'

@Component({
  selector: 'app-roxy',
  templateUrl: './roxy.component.html',
  styleUrls: ['./roxy.component.css']
})
export class RoxyComponent implements OnInit {
  quotes = [
    new quotes('A word to the wise is sufficient', 'Dickens','A smart person learns the lesson without being told over and over.', new Date(2019,1,26)),
    new quotes('Oh what a tangled web we weave when first we practice to deceive.', 'Sir Walter Scott','Lying leads to more lies and more chaos.',new Date(2019,1,27)),
    new quotes('Examine what is said, not him who speaks.', 'Arabian proverb','Listen to the message and do not be mesmerized by the charismtic speaker.',new Date(2019,1,28)),
    new quotes('I not only use all the brains I have, but all that I can borrow.', 'Woodrow Wilson','It is  smart to ask advice rather than depend on your own brain',new Date(2019,1,29))
]

completequotes(isComplete,index){
  if (isComplete){
    this.quotes.splice(index,1);
  }
}
// toggleDetails(index){
//   this.quotes[index].showDescription= ! this.quotes[index].showDescription;
// }
//   constructor() { }

  ngOnInit() {
  }

}
