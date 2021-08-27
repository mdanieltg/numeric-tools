import { Component } from '@angular/core';
import { Util } from '../common/util';

@Component({
  selector: 'app-duplicates',
  templateUrl: './duplicates.component.html',
  styleUrls: ['./duplicates.component.css']
})
export class DuplicatesComponent {
  duplicatesList = '';
  filteredList = '';

  search(input: string): void {
    const purgedValues = Util.inputToIntArray(input);
    this.filteredList = Util.arrayAsList(purgedValues);
  }
}
