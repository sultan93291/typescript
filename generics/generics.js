"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = [];
score = [1, 2, 3, 4, 5, 6];
function identity(val) {
    console.log(typeof val);
    return val;
}
function identityTwo(val) {
    console.log(typeof val);
    return val;
}
function identityThree(val) {
    console.log(typeof val);
    return val;
}
identity(5);
identityTwo(5);
identityThree(5);
function identitya(val) {
    return val;
}
identitya({ userName: "sultan", userId: 25 });
function lgMethod(val) {
    return val;
}
function lgMethodTwo(val) {
    //calling form data base
    var mYIndex = 3;
    return val[mYIndex];
}
var myMd = function (val) {
    var mYIndex = 3;
    return val[mYIndex];
};
function dataBaseConnection(valOne, ValTwo) {
    return {
        valOne: valOne,
        ValTwo: ValTwo,
    };
}
console.log(dataBaseConnection(5, {
    Connection: "data",
    devices: 2,
    isAlive: true,
}));
var Sells = /** @class */ (function () {
    function Sells() {
        this.cart = [];
    }
    Sells.prototype.addToCart = function (product) {
        this.cart.push(product);
    };
    return Sells;
}());
var product = new Sells();
product.addToCart("nothing");
console.log(product);
var person = {
    userName: "sultan",
    userId: 56564,
    isAlive: true,
    isPaid: false
};
console.log(person.userName);
