import { Component, OnInit, Input } from '@angular/core';
import {quotes} from '../quotes'

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  @Input() quotes:quotes;
  constructor() { }

  ngOnInit() {
  }

}
