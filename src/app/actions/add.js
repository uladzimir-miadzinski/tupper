"use strict";
exports.__esModule = true;
var subtract_1 = require("./subtract");
var multiply_1 = require("./multiply");
exports.addByModule = function (a, b) {
    var _a = subtract_1.swapModDesc(a, b), first = _a.a, second = _a.b;
    var firstRArr = multiply_1.numToReversedArr(first);
    var secondRArr = multiply_1.numToReversedArr(second);
    var resultRArr = [0];
    for (var i = 0; i < firstRArr.length; i++) {
        var sum = laydownCol(firstRArr[i], secondRArr[i]);
        var units = sum % 10;
        var tens = Math.floor(sum / 10);
        var resultItem = +resultRArr[i] + units;
        var shift = resultItem >= 10 ? 1 : 0;
        resultRArr[i] = resultItem % 10;
        resultRArr[i + 1] = tens + shift;
    }
    var resultArr = resultRArr.slice().reverse();
    var number = subtract_1.arrToNum(subtract_1.trimZeros(resultArr));
    return number;
};
var laydownCol = function (first, second) {
    return typeof second === 'undefined'
        ? first
        : first + second;
};
