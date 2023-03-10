import { Component, Input} from '@angular/core';
import { Game } from '../interfaces';
import { GamesAPIService } from '../services/gamesAPI.service';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent {

  @Input() public game: Game;
  
  public mouseHover: boolean = false;

  constructor() { }
}
