import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../interfaces';
import { GameCardService } from '../services/game-card.service';


@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent implements OnInit {

  @Input() public game: Game;
  
  public customIcons: string[] = ['pc', 'playstation', 'xbox'];

  constructor(private gameService: GameCardService) {
         this.customIcons.forEach((icon: string) => {
          this.gameService.addCustomIcon(icon);
         });
  }

  ngOnInit() {
  }
}
