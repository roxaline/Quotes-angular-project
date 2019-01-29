import { Component, OnInit } from '@angular/core';
import {Quotes} from '../quotes'

@Component({
  selector: 'app-roxy',
  templateUrl: './roxy.component.html',
  styleUrls: ['./roxy.component.css']
})
export class RoxyComponent implements OnInit {
  quotes = [
    new Quotes('A word to the wise is sufficient', 'Dickens'),
    new Quotes('Oh what a tangled web we weave when first we practice to deceive.', 'Sir Walter Scott'),
    new Quotes('Examine what is said, not him who speaks.', 'Arabian proverb' ),
    new Quotes('I not only use all the brains I have, but all that I can borrow.', 'Woodrow Wilson' ),
]

  constructor() { }

  ngOnInit() {
  }

}
