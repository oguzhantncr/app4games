import { Component, OnInit } from '@angular/core';
import { GamesAPIService } from '../services/gamesAPI.service';
import { Game } from '../interfaces';
import { GameCardService } from '../services/game-card.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { GameListService } from '../services/game-list.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit {

  public gameList$: Observable<Game[]>;
  public gamesPerPage: string;
  public gamesTotal: number;
  public pagesTotal: number;
  public currentPage: string;
  public pageNumbers: number[];

  constructor(private gamesAPIService: GamesAPIService,
              private gameService: GameCardService,
              private gameListService: GameListService,
              private route: ActivatedRoute,
              private router: Router) {
    this.gameService.addPlatformIcons();
  }
  
  ngOnInit(): void {
    this.loadGamesPerPage();
  }
  
  loadGamesPerPage() {
    this.route.queryParamMap.subscribe(qparams => {

      this.currentPage = qparams.get('page') ?? '1';
      this.gamesPerPage = qparams.get('count') ?? '10';

      this.gameList$ = this.gamesAPIService.getGamesPerPage(this.currentPage, this.gamesPerPage)
      .pipe(map((games: any) => {
        this.gamesTotal = games.count;
        this.pagesTotal = Math.ceil(games.count / +this.gamesPerPage);
        return games.results;
      }))

      this.pageNumbers = this.gameListService.getPageNumbers(+this.currentPage, this.pagesTotal);

    })
  }

  updateGamesCountPerPage(count: string) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: {
        count: count
      },
      queryParamsHandling: 'merge' // preserve the existing query params in the route
    })
  }

}
