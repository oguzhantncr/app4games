import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameListService {

  constructor() { }

  getPageNumbers(currentPage: number, pagesTotal: number): number[] {
    if (currentPage <= 3) {
      return [1, 2, 3, 4, 5]
    }
    else if (currentPage >= pagesTotal-2) {
      return [pagesTotal-4, pagesTotal-3, pagesTotal-2, pagesTotal-1, pagesTotal]
    } 
    else {
      return [currentPage-2, currentPage-1, currentPage, currentPage+1, currentPage+2]
    }
  }
}
