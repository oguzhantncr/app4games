import { Component, OnInit } from '@angular/core';
import { GamesAPIService } from '../services/gamesAPI.service';
import { Game } from '../interfaces';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  public gameList: Game[];
  public game: Game;

  constructor(private gamesAPIService: GamesAPIService) { }

  ngOnInit(): void {
    this.gamesAPIService.getGames()
    .subscribe((games: any) => {
      this.gameList = games.results;
      this.game = this.gameList[4];
      console.log(this.game);
    })
  }

}
