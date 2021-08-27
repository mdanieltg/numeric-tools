import { Component } from '@angular/core';
import { Range } from './range';
import { Util } from '../common/util';

@Component({
  selector: 'app-ranges',
  templateUrl: './ranges.component.html',
  styleUrls: ['./ranges.component.css']
})
export class RangesComponent {
  doNotContractPairs = false;
  foldedValues = '';
  unfoldedValues = '';

  fold(input: string): void {
    const valuesToFold = Util.inputToIntArray(input);
    const foldedArray = Range.fold(valuesToFold, this.doNotContractPairs);
    this.foldedValues = Util.arrayAsList(foldedArray);
  }

  unfold(input: string): void {
    const rangeArray = Util.inputToRangeArray(input);

    let unfoldedValues = Range.unfold(rangeArray);
    unfoldedValues = Util.removeDuplicates(unfoldedValues.sort((a, b) => a - b));

    this.unfoldedValues = Util.arrayAsList(unfoldedValues);
  }
}
