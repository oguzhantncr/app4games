import { Component, OnInit } from '@angular/core';
import { GamesAPIService } from '../services/gamesAPI.service';
import { Game } from '../interfaces';
import { GameCardService } from '../services/game-card.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  public gameList$: Observable<Game[]>;

  constructor(private gamesAPIService: GamesAPIService,
              private gameService: GameCardService) {
    this.gameService.addPlatformIcons();
  }

  ngOnInit(): void {
    this.gameList$ = this.gamesAPIService.getGames()
    .pipe(map((games: any) => {
      return games.results;
    }))
  }

}
