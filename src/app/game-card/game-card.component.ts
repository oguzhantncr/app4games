import { Component, Input, OnInit } from '@angular/core';
import { Game } from '../interfaces';


@Component({
  selector: 'app-game-card',
  templateUrl: './game-card.component.html',
  styleUrls: ['./game-card.component.css']
})
export class GameCardComponent implements OnInit {

  @Input() public game: Game;
  
  public customIcons: string[] = ['windows', 'playstation', 'xbox'];

  constructor() {
         
  }


  

  ngOnInit() {
  }
}
