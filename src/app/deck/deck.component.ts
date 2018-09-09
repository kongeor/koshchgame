import { Component, OnInit, Input } from '@angular/core';

import { Deck } from 'koshchey/dist/deck';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
})
export class DeckComponent implements OnInit {

  @Input() player: String;
  @Input() deck: Deck;

  constructor() { }

  ngOnInit() {
  }

}
