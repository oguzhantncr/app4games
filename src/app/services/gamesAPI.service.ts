import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GamesAPIService {

  private APIKey: string = '0b641facad9e4077a52a588c1078c8f6';

  constructor(private http: HttpClient) { }

  getFilterParams(parent_platforms: string, categories: string) {
    let filterParams = ''
    if (parent_platforms !== '' && categories !== '') {
      filterParams = '&parent_platforms=' + parent_platforms + '&genres=' + categories;
    }
    else if (parent_platforms !== '' && categories === '') {
      filterParams = '&parent_platforms=' + parent_platforms;
    }
    else if (parent_platforms === '' && categories !== '') {
      filterParams = '&genres=' + categories;
    }
    return filterParams;
  }

  getGamesPerPage(page: string, perPage: string, searchText: string = '', parent_platforms: string, categories: string, metacritic: string) {

    let filterParams = this.getFilterParams(parent_platforms, categories);
    
    return this.http.get('https://api.rawg.io/api/games?key=' + this.APIKey + 
                                                            '&page=' + page + 
                                                            '&page_size=' + perPage + 
                                                            '&search=' + searchText +
                                                            filterParams +
                                                            '&metacritic=' + metacritic)
  }

  getParentPlatforms() {
    return this.http.get('https://api.rawg.io/api/platforms/lists/parents?key=' + this.APIKey)
  }

  getGameDetailsById(id: string) {
    return this.http.get('https://api.rawg.io/api/games/' + id + '?key=' + this.APIKey)
  }

  getSearchedGameOptions(searchText: string) {
    return this.http.get('https://api.rawg.io/api/games?key=' + this.APIKey + '&search=' + searchText)
  }

  getGenres() {
    return this.http.get('https://api.rawg.io/api/genres?key=' + this.APIKey);
  }

}
