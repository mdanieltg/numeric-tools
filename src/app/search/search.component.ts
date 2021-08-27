import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  list: string = '';
  searchPool: string = '';
  foundList: string = '';
  notFoundList: string = '';

  search(): void {
    console.log('List: ', this.list);
    console.log('Pool: ', this.searchPool);

    this.foundList = this.list;
    this.notFoundList = this.searchPool;
  }
}
