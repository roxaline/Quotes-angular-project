import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {quotes} from '../quotes'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() quote:quotes;
  @Output() isComplete= new EventEmitter<boolean>();
  quoteComplete(complete:boolean){
    this.isComplete.emit(complete);

  }
  constructor() { }

  ngOnInit() {
  }

}
