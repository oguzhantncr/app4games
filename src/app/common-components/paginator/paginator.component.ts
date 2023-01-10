import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent {

  @Input() public link: string;
  @Input() public pagesTotal: number;

  public pageNumbers: number[] = [1, 2, 3, 4, 5]
  public currentPage: number = 1;

  clickPage(clickText: any) {

    if (clickText.innerText === "Previous") {
      this.currentPage--;
    }
    else if (clickText.innerText === "Next") {
      this.currentPage++;
    } 
    else {
      this.currentPage = +clickText.innerText;
    }
  }

}
