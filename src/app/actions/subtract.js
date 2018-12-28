"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const multiply_1 = require("./multiply");
exports.subtractByModule = (a, b) => {
    const { a: first, b: second } = exports.swapModDesc(a, b);
    const swapHappened = first === b;
    const firstRArr = multiply_1.numToReversedArr(first);
    const secondRArr = multiply_1.numToReversedArr(second);
    const resultRArr = [];
    for (let i = 0; i < firstRArr.length; i++) {
        if (firstRArr[i] < secondRArr[i]) {
            let j = i + 1;
            while (firstRArr[j] === 0) {
                j++;
            }
            for (let k = i + 1; k <= j; k++) {
                if (firstRArr[k] === 0) {
                    firstRArr[k] = 9;
                }
                else {
                    firstRArr[k] = firstRArr[k] - 1;
                }
            }
            firstRArr[i] = firstRArr[i] + 10;
        }
        const sum = laydownCol(firstRArr[i], secondRArr[i]);
        resultRArr.unshift(sum);
    }
    const number = exports.arrToNum(exports.trimZeros(resultRArr));
    return swapHappened && number !== '0' ? `-${number}` : number;
};
exports.max = (first, second) => {
    return first > second ? first : second;
};
exports.subtract = (first, second) => {
    const L = exports.max(first.length, second.length);
    const M = 10;
    let c = '';
    let { a, b } = exports.swapModDesc(first, second);
    let i = 0;
    let cf = 0;
    while (i < L) {
        let ai = toDigit(a.charAt(a.length - i - 1));
        let bi = toDigit(b.charAt(b.length - i - 1));
        let t = bi + cf;
        if (ai < t) {
            c = `${fromDigit(M + ai - t)}${c}`;
            cf = 1;
        }
        else {
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
    ? unit.charCodeAt(0) - "0".charCodeAt(0)
    : 0;
const fromDigit = (unit) => String.fromCharCode("0".charCodeAt(0) + unit);
const trimLongNumber = (unit) => {
    let resultNumber = unit;
    while (1 < resultNumber.length && resultNumber.charAt(0) === '0') {
        resultNumber = resultNumber.substr(1, resultNumber.length - 1);
    }
    return resultNumber;
};
exports.arrToNum = (numberArr) => {
    let numberStr = '';
    for (let i = 0; i < numberArr.length; ++i) {
        numberStr += numberArr[i];
    }
    return numberStr;
};
exports.trimZeros = (numberArr) => {
    const firstNotZeroIdx = firstNotZeroIndex(numberArr);
    return typeof firstNotZeroIdx === 'undefined'
        ? [0]
        : firstNotZeroIdx === 0 ? numberArr : numberArr.slice(firstNotZeroIdx);
};
const firstNotZeroIndex = (numberArr) => {
    for (let i = 0; i < numberArr.length; i++) {
        if (numberArr[i] !== 0) {
            return i;
        }
    }
};
const laydownCol = (first, second) => {
    return typeof second === 'undefined'
        ? first
        : first - second;
};
exports.isSecondBigger = (a, b) => {
    const aLength = a.length;
    const bLength = b.length;
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
exports.swapModDesc = (first, second) => {
    const modFirst = exports.takeMod(first);
    const modSecond = exports.takeMod(second);
    return exports.isSecondBigger(modFirst, modSecond)
        ? {
            a: modSecond,
            b: modFirst
        } : {
        a: modFirst,
        b: modSecond
    };
};
exports.takeMod = (number) => number.replace('-', '');
//# sourceMappingURL=subtract.js.map