import { Component, OnInit } from '@angular/core';
import { Game, Random, Gen } from 'koshchey';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'koshchgame';

  game: Game;

  ngOnInit(): void {
    const rnd = new Random("yo");
    const p1 = Gen.randomDeck(rnd)
    const p2 = Gen.randomDeck(rnd);
    this.game = new Game(p1, p2, rnd);
  }

  play() {
    while(!this.game.isFinished()) {
        console.log(this.game.toString());
        console.log();
        this.game.playRound();
    }
  }
}
