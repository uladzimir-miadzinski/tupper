"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.multiply = (a, b) => {
    if (a === '0' || b === '0' || a === '' || b === '') {
        return '0';
    }
    else if (a === '1') {
        return b;
    }
    else if (b === '1') {
        return a;
    }
    const aArr = exports.numToReversedArr(a);
    const bArr = exports.numToReversedArr(b);
    const stack = multiplyArrays(aArr, bArr);
    return shiftStack(stack).reverse().join('');
};
exports.numToReversedArr = (number) => exports.numToArray(number).reverse();
exports.numToArray = (number) => number.split('').map((number) => +number);
const multiplyArrays = (aArr, bArr) => {
    const stack = [];
    aArr.forEach((aNumber, i) => {
        bArr.forEach((bNumber, j) => {
            const m = aNumber * bNumber;
            stack[i + j] = stack[i + j]
                ? stack[i + j] + m
                : m;
        });
    });
    return stack;
};
const shiftStack = (stack) => {
    const resultStack = [...stack];
    for (let i = 0; i < resultStack.length; i++) {
        const units = resultStack[i] % 10;
        const tens = Math.floor(resultStack[i] / 10);
        resultStack[i] = units;
        if (resultStack[i + 1]) {
            resultStack[i + 1] += tens;
        }
        else if (tens !== 0) {
            resultStack[i + 1] = tens;
        }
    }
    return resultStack;
};
//# sourceMappingURL=multiply.js.map