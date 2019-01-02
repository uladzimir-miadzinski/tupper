import {numToArray, numToReversedArr} from './multiply';

export const subtractByModule = (a: string, b: string): string => {
  const {a: first, b: second}: { a: string, b: string } = swapModDesc(a, b);
  const swapHappened: boolean = first === b;
  const firstRArr: number[] = numToReversedArr(first);
  const secondRArr: number[] = numToReversedArr(second);
  const resultRArr: number[] = [];
  
  for (let i = 0; i < firstRArr.length; i++) {
    if (firstRArr[i] < secondRArr[i]) {
      let j: number = i + 1;
      while (firstRArr[j] === 0) {
        j++;
      }
      for (let k = i + 1; k <= j; k++) {
        if (firstRArr[k] === 0) {
          firstRArr[k] = 9;
        } else {
          firstRArr[k] = firstRArr[k] - 1;
        }
      }
      firstRArr[i] = firstRArr[i] + 10;
    }
    const sum: number = laydownCol(firstRArr[i], secondRArr[i]);
    resultRArr.unshift(sum);
  }

  const number: string = arrToNum(trimZeros(resultRArr));
  
  return swapHappened && number !== '0' ? `-${number}` : number;
};

export const max = (first: number, second: number): number => {
  return first > second ? first : second;
};

export const subtract = (first: string, second: string) => {
  const L: number = max(first.length, second.length);
  const M = 10;
  let c = '';
  const {a, b}: { a: string, b: string } = swapModDesc(first, second);
  let i = 0;
  let cf = 0;

  while (i < L) {
    const ai = toDigit(a.charAt(a.length - i - 1));
    const bi = toDigit(b.charAt(b.length - i - 1));
    
    const t = bi + cf;
    if (ai < t) {
      c = `${fromDigit(M + ai - t)}${c}`;
      cf = 1;
    } else {
      c = `${fromDigit(ai - t)}${c}`;
      cf = 0;
    }
    ++i;
  }
  
  if (c === '') {
    c = '0';
  }
  
  c = trimLongNumber(c);
  
  return a === first ? c : `-${c}`;
};

const toDigit = (unit) => unit !== '' && '0' <= unit && unit <= '9'
  ? unit.charCodeAt(0) - '0'.charCodeAt(0)
  : 0;

const fromDigit = (unit) => String.fromCharCode('0'.charCodeAt(0) + unit);

const trimLongNumber = (unit: string) => {
  let resultNumber = unit;
  while (1 < resultNumber.length && resultNumber.charAt(0) === '0') {
    resultNumber = resultNumber.substr(1, resultNumber.length - 1);
  }
  return resultNumber;
};


export const arrToNum = (numberArr: number[]): string => {
  let numberStr = '';
  for (let i = 0; i < numberArr.length; ++i) {
    numberStr += numberArr[i];
  }
  return numberStr;
};

export const trimZeros = (numberArr: number[]): number[] => {
  const firstNotZeroIdx: number = firstNotZeroIndex(numberArr);
  return typeof firstNotZeroIdx === 'undefined'
    ? [0]
    : firstNotZeroIdx === 0 ? numberArr : numberArr.slice(firstNotZeroIdx);
};

const firstNotZeroIndex = (numberArr: number[]): number => {
  for (let i = 0; i < numberArr.length; i++) {
    if (numberArr[i] !== 0) {
      return i;
    }
  }
};

const laydownCol = (first: number, second: number): number => {
  return typeof second === 'undefined'
    ? first
    : first - second;
};

export const isSecondBigger = (a: string, b: string): boolean => {
  const aLength: number = a.length;
  const bLength: number = b.length;
  
  if (aLength === bLength) {
    for (let i = 0; i < aLength; i++) {
      if (a[i] === b[i]) {
        continue;
      }
      return b[i] > a[i];
    }
  }
  
  return bLength > aLength;
};

interface SwapModuloDesc {
  a: string;
  b: string;
}

export const swapModDesc = (first: string, second: string): SwapModuloDesc => {
  const modFirst: string = takeMod(first);
  const modSecond: string = takeMod(second);
  return isSecondBigger(modFirst, modSecond)
    ? {
      a: modSecond,
      b: modFirst
    } : {
      a: modFirst,
      b: modSecond
    };
};

export const takeMod = (number: string): string => number.replace('-', '');
