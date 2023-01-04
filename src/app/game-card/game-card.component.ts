import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../interfaces';
import { GameCardService } from '../services/game-card.service';

@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent {

  @Input() public game: Game;

  constructor() { }
}
