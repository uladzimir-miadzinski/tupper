import { swapModDesc, arrToNum, trimZeros } from "./subtract";
import { numToReversedArr } from "./multiply";

export const addByModule = (a: string, b: string): string => {
  const { a: first, b: second }: { a: string, b: string } = swapModDesc(a, b);
  const firstRArr: number[] = numToReversedArr(first);
  const secondRArr: number[] = numToReversedArr(second);
  const resultRArr: number[] = [0];

  for (let i: number = 0; i < firstRArr.length; i++) {
    const sum: number = laydownCol(firstRArr[i], secondRArr[i]);
    const units: number = sum % 10;
    const tens: number = Math.floor(sum / 10);

    const resultItem: number = +resultRArr[i] + units;
    const shift: number = resultItem >= 10 ? 1 : 0;
    resultRArr[i] = resultItem % 10;
    resultRArr[i + 1] = tens + shift;
  }

  const resultArr: number[] = [...resultRArr].reverse();

  const number: string = arrToNum(trimZeros(resultArr));

  return number;
}

const laydownCol = (first: number, second: number): number => {
  return typeof second === 'undefined'
    ? first
    : first + second;
}
