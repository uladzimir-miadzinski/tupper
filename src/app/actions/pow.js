"use strict";
exports.__esModule = true;
var divide_1 = require("./divide");
var subtract_1 = require("./subtract");
var multiply_1 = require("./multiply");
var isOdd = function (number) {
    return +number[number.length - 1] % 2 === 1;
};
var powMemoized = function () {
    var cache = {};
    return function (a, n) {
        var hash = a + "^" + n;
        if (hash in cache) {
            return cache[hash];
        }
        else {
            var result = '1';
            while (n !== '0') {
                if (isOdd(n)) {
                    result = multiply_1.multiply(a, result);
                    n = subtract_1.subtractByModule(n, '1');
                }
                else {
                    a = multiply_1.multiply(a, a);
                    n = divide_1.divide(n, '2');
                }
            }
            cache[hash] = result;
            return result;
        }
    };
};
exports.pow = powMemoized();
exports.oldpow = function (a, n) {
    var result = '1';
    while (n !== '0') {
        if (isOdd(n)) {
            result = multiply_1.multiply(a, result);
            n = subtract_1.subtractByModule(n, '1');
        }
        else {
            a = multiply_1.multiply(a, a);
            n = divide_1.divide(n, '2');
        }
    }
    return result;
};
