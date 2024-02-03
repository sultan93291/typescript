"use strict";
// in this file we are gonna explore union type data we are gonna use union instead of any ;
Object.defineProperty(exports, "__esModule", { value: true });
// notice we can assign multiple type in a varriable and while we are trying to push number and string it's allowing us . but if we push anything that haven't declared as a type it will give us a error . we can use union instead of any . it's  much better .
var score = 33;
score = 12;
score = "55";
var Users = { username: "sultan", id: 334 };
Users = { superior: "sanjar", id: 553 };
function dbchk(id) {
    if (typeof id === "string") {
        id.toUpperCase();
        return id;
    }
    Math.floor(id);
    return id;
}
console.log(dbchk(3));
console.log(dbchk("sultan"));
// array
// now look when we use array of number we can't use string ther . and if we use string we can't use number there .
// let arr1: number[] = [1, 2, 3, 4, "5"];
// let arr2: string[] = ["sutlan", "sanjar", "abib", "dipto", 6];
// let arr3: string[] | number[] | boolean[] = ["sultan", 1, true];
var arr4 = [1, "sultan", "true"];
var arr5 = [["sultan"], [5], [true]];
console.log(arr5[1]);
