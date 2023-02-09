import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import { Game } from 'src/app/interfaces';
import { GamesAPIService } from 'src/app/services/gamesAPI.service';
import { MatDialog } from '@angular/material/dialog';
import { FilterDialogComponent } from '../filter-dialog/filter-dialog.component';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  public searchText: string = "";
  public searchedGames$: Observable<Game[]>; 

  constructor(private router: Router, private gameAPIService: GamesAPIService, private dialog: MatDialog) {}

  
  onGameSearchSubmit() {
    this.router.navigate(['/', 'games'], {
      queryParams: {
        page: 1,
        search: this.searchText
      },
      queryParamsHandling: 'merge' //  preserve the existing query params in the route
    })
    
    this.clearSearch()
  }
  
  clearSearch() {
    this.searchText = ''
  }
  
  listGamesOnSearch() {
    this.searchedGames$ = this.gameAPIService.getSearchedGameOptions(this.searchText)
    .pipe(map((games: any) => {
      return games.results.slice(0, 5);
    }))
  }
  
  searchTextChange(text: string) {
    this.searchText = text;
    this.listGamesOnSearch();
  }

  openDialog() {
    this.dialog.open(FilterDialogComponent);
  }

}
