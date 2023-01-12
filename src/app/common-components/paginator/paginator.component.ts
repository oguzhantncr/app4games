import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.css']
})
export class PaginatorComponent {

  @Input() public link: string;
  @Input() public currentPage: number;
  @Input() public pagesTotal: number;

  @Output() updateAmountPerPage = new EventEmitter();

  public pageNumbers: number[] = [1, 2, 3, 4, 5]
  public amountPerPage: string;

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

  updateAmount() {
    this.updateAmountPerPage.emit(this.amountPerPage);
  }

}
