export class Util {
  static inputToIntArray(inputText: string): number[] {
    const inputArray = inputText.split('\n');
    const array: number[] = [];

    for (const item of inputArray) {
      if (/^\s*\d+\s*$/.test(item)) {
        const int = parseInt(item, 10);

        if (!array.includes(int)) {
          array.push(int);
        }
      }
    }

    return array.sort((a, b) => a - b);
  }

  static inputToRangeArray(inputText: string): string[] {
    const inputArray = inputText.split('\n');
    const array: string[] = [];

    for (const item of inputArray) {
      if (/^\s*\d+(\s*-\s*\d+)?\s*$/.test(item)) {
        const value = item.replace(/\s*/g, '');

        if (!array.includes(value)) {
          array.push(value);
        }
      }
    }

    return array;
  }

  static arrayAsList<T>(array: T[]): string {
    let stringList = '';

    for (const item of array) {
      stringList += item + '\n';
    }

    return stringList;
  }

  static removeDuplicates<T>(array: T[]): T[] {
    const purgedArray: T[] = [];

    for (const item of array) {
      if (item && !purgedArray.includes(item)) {
        purgedArray.push(item);
      }
    }

    return purgedArray;
  }
}
