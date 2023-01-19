import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent {

  public searchText: string = "";

  constructor(private router: Router) {}

  onGameSearchSubmit() {
    this.router.navigate(['/', 'games'], {
      queryParams: {
        page: 1,
        search: this.searchText
      },
      queryParamsHandling: 'merge' //  preserve the existing query params in the route
    })

    this.searchText = ''
  }
}
