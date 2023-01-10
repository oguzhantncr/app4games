import { Component, OnInit } from '@angular/core';
import { GamesAPIService } from '../services/gamesAPI.service';
import { Game } from '../interfaces';
import { GameCardService } from '../services/game-card.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  public gameList$: Observable<Game[]>;
  public gamesPerPage: number;
  public gamesTotal: number;
  public pagesTotal: number;
  public currentPage: string | null;

  constructor(private gamesAPIService: GamesAPIService,
              private gameService: GameCardService,
              private route: ActivatedRoute) {
    this.gameService.addPlatformIcons();
  }

  ngOnInit(): void {

    this.route.queryParamMap.subscribe(qparams => {
      if (qparams.has('page')) {
        this.currentPage = qparams.get('page');
      } else {
        this.currentPage = '1';
      }
      
      this.gameList$ = this.gamesAPIService.getGamesPerPage(this.currentPage)
      .pipe(map((games: any) => {
        console.log(games);
        this.gamesTotal = games.count;
        this.gamesPerPage = games.results.length;
        this.pagesTotal = Math.ceil(games.count / games.results.length);
        return games.results;
      }))
    })

  }

}
