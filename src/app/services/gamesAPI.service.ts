import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GamesAPIService {

  private APIKey: string = '0b641facad9e4077a52a588c1078c8f6';

  constructor(private http: HttpClient) { }

  getGamesPerPage(page: string | null) {
    return this.http.get('https://api.rawg.io/api/games?key=' + this.APIKey + '&page=' + page)
  }

  getParentPlatforms() {
    return this.http.get('https://api.rawg.io/api/platforms/lists/parents?key=' + this.APIKey)
  }

}
