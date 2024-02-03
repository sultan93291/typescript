"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function mydef(num) {
    return num + 2;
}
// console.log(mydef(15));
var heros = ["ironman", "spiderman", "batman"];
heros.forEach(function (hero) {
    console.log("hero is ".concat(hero));
});
var dummy = function () {
    return "";
};
function status(num) {
    if (num > 5) {
        return true;
    }
    return "200";
}
function err1(err) {
    console.log(err);
}
function err2(err) {
    throw new Error(err);
}
var joybangla = function (say) {
    return say;
};
console.log(joybangla("hello world!"));
