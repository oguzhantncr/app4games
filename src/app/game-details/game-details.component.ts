import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { GameDetails } from '../interfaces';
import { GamesAPIService } from '../services/gamesAPI.service';

@Component({
  selector: 'app-game-details',
  templateUrl: './game-details.component.html',
  styleUrls: ['./game-details.component.css']
})
export class GameDetailsComponent implements OnInit {

  public gameId: string;
  public game$: Observable<GameDetails>;

  constructor(private gameAPIService: GamesAPIService,
              private route: ActivatedRoute) {  }

  ngOnInit() {
    this.getGameById()
  }

  getGameById() {
    this.route.paramMap.subscribe(params => {
      this.gameId = params.get('id') ?? '';
      this.game$ = this.gameAPIService.getGameDetailsById(this.gameId)
      .pipe(map((game: any) => {
        return game;
      }))
    })
  }
}
