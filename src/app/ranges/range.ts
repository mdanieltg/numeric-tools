export class Range {
  static fold(values: number[], noContractPair: boolean): string[] {
    const foldedArray: string[] = [];

    for (let i = 0; i < values.length; i++) {
      if (!values[i]) {
        continue;
      }

      const firstNumber = values[i];
      let lastNumber = firstNumber;

      while (i < values.length) {
        const next = values[i + 1];

        if (lastNumber + 1 !== next) {
          break;
        } else {
          if (lastNumber + 1 === next) {
            lastNumber++;
          }

          i++;
        }
      }

      if (firstNumber === lastNumber) {
        foldedArray.push(firstNumber.toString());
      } else {
        if (noContractPair && lastNumber - firstNumber === 1) {
          foldedArray.push(`${firstNumber}\n${lastNumber}`);
        } else {
          foldedArray.push(`${firstNumber}-${lastNumber}`);
        }
      }
    }

    return foldedArray;
  }

  static unfold(ranges: string[]): number[] {
    const unfoldedValues: number[] = [];

    for (const fold of ranges) {
      if (fold) {
        for (const range of Range.expandRange(fold)) {
          unfoldedValues.push(range);
        }
      }
    }

    return unfoldedValues;
  }

  private static expandRange(range: string): number[] {
    const splitRange = range.split('-');
    const expandedRange: number[] = [];

    if (splitRange.length === 2) {
      const firstNumber = parseInt(splitRange[0], 10) || 0;
      const lastNumber = parseInt(splitRange[1], 10) || firstNumber;

      for (let i = firstNumber; i <= lastNumber; i++) {
        expandedRange.push(i);
      }
    } else if (splitRange.length === 1 && splitRange[0]) {
      return [parseInt(splitRange[0], 10)];
    }

    return expandedRange;
  }
}
