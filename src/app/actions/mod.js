"use strict";
exports.__esModule = true;
var divide_1 = require("./divide");
var subtract_1 = require("./subtract");
var multiply_1 = require("./multiply");
exports.mod = function (first, second) { return subtract_1.subtractByModule(first, multiply_1.multiply(divide_1.divide(first, second), second)); };
