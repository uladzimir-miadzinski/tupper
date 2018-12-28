import {Stream} from 'stream';

export const divide = (firstValue: string, secondValue: string): string => {
  //stream examples
  const readableStream = new Stream.Readable();
  let isRemoveZero: boolean = false;
  let count: number = 0;
  let isFirst: boolean = true;
  let lengthOutput = firstValue.length - secondValue.length === 0 ? 2 : (firstValue.length - secondValue.length + 2);
  if (secondValue === '1') {
    return firstValue;
  }
  if (firstValue === secondValue) {
    return '1';
  }
  if (firstValue.length < secondValue.length) {
    return '0';
  }
  if (findBiggestValueString(secondValue, firstValue)) {
    lengthOutput--;
  }
  do {
    readableStream.push(count.toString());
    count = 0;
    lengthOutput--;
    if (isRemoveZero) {
      secondValue = removeLeadingZero(secondValue);
      isRemoveZero = false;
    }
    if (lengthOutput !== 0 && firstValue[0] !== '0' && findBiggestValueString(secondValue, firstValue) && firstValue.length > secondValue.length) {
      if (!isFirst) {
        readableStream.push(count.toString());
        lengthOutput--;
      }
      secondValue = addLeadingZero(secondValue);
      isRemoveZero = true;
    }
    while (findBiggestValueString(firstValue, secondValue)) {
      firstValue = subtract(firstValue, secondValue);
      count++;
    }
    if (firstValue[0] !== '0') {
      isFirst = true;
    } else {
      isFirst = isRemoveZero;
      firstValue = removeLeadingZero(firstValue);
    }
    if (firstValue[0] === '0' && isRemoveZero) {
      firstValue = removeLeadingZero(firstValue);
      isFirst = false;
    }
    
  } while (lengthOutput > 0);
  readableStream.push(null);
  let stream = readableStream.read().toString();
  if (stream[0] === '0' && stream.length > 1) {
    stream = removeLeadingZero(stream);
  }
  return stream !== null ? stream.toString() : '0';
};


const addLeadingZero = (value: string) => {
  return "0" + value;
};

export const subtract = (firstValueMain: string, secondValueMain: string): string => {
  let subOne: boolean = false;
  let addTen: boolean = false;
  const isMinus = findBiggestValueString(secondValueMain,firstValueMain);
  let firstValue = isMinus? secondValueMain : firstValueMain;
  let secondValue = isMinus? firstValueMain : secondValueMain;
  for (let i = 1; i <= secondValue.length; i++) {
    const secondNumber: number = Number(secondValue[secondValue.length - i]);
    if (addTen) {
      subOne = true;
      addTen = !addTen;
    }
    if ((subOne ? Number(firstValue[firstValue.length  - i]) - 1 : Number(firstValue[firstValue.length  - i])) < secondNumber) {
      addTen = true;
      
    }
    firstValue = subFn(firstValue, firstValue.length  - i, subOne ? secondNumber + 1 : secondNumber, addTen);
    subOne = false;
  }
  while(firstValue[0] === '' && firstValue.length > 1){
    firstValue = removeLeadingZero(firstValue);
  }
  let i = secondValue.length+1;
  while(addTen){
    if(Number(firstValue[firstValue.length  - i]) === 0){
      firstValue = subFn(firstValue, firstValue.length  - i, 1, addTen);
      i++;
      continue;
    }
    firstValue = subFn(firstValue,firstValue.length-i,1,false);
    addTen = false;
  }
  while(firstValue[0] === '0' && firstValue.length > 1){
    firstValue = removeLeadingZero(firstValue);
  }
  return isMinus ? '-'+firstValue: firstValue;
};

const subFn = (value: string, index: number, subValue: number, flag: boolean): string =>
  value.substr(0, index)
  + (flag ? (Number(value[index]) + 10 - subValue) : (Number(value[index]) - subValue))
  + value.substr(index + 1, value.length - index - 1);

export const findBiggestValueString = (firstValue: string, secondValue: string): boolean => {
  if (firstValue.length === secondValue.length) {
    for (let i = 0; i < firstValue.length; i++) {
      if (firstValue[i] === secondValue[i]) {
        continue;
      }
      if (firstValue[i] > secondValue[i]) {
        return true;
      }
      if (firstValue[i] < secondValue[i]) {
        return false;
      }
    }
  } else {
    return firstValue.length > secondValue.length;
  }
  return false;
  
};

const removeLeadingZero = (value: string) => value.substr(1, value.length - 1);