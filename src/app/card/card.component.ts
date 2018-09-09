import { Component, Input } from '@angular/core';
import { GameCard } from 'koshchey/dist/gamecard';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.css']
})
export class CardComponent {

	@Input() card: GameCard;

}