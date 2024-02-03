"use strict";
const person = [
    { name: "sultan", age: 21, phone: 13232, alive: true },
    { name: "dipto", age: 23, phone: 13250, alive: false },
    { name: "abib", age: 28, phone: 13230, alive: true },
    { name: "sanjar", age: 25, phone: 13231, alive: false },
];
person.map((person, idnex) => {
    console.log(person);
    return person;
});
// class user {
//   readonly name: string;
//   number: number;
//   constructor(name: string, number: number) {
//     this.name = name;
//     this.number = number;
//   }
// }
class user {
    constructor(name, number) {
        this.name = name;
        this.number = number;
        this._courserCount = 1;
        this.city = "";
    }
    get courserCount() {
        return this.number;
    }
    set courserCount(countNum) {
        if (this.courserCount <= 0) {
            throw new Error("moye moye");
        }
        this.courserCount = countNum;
    }
    deleteToken(token) {
        return "token delelted successfully";
    }
}
class subUser extends user {
    constructor() {
        super("sultan", 789897);
        this.isFamily = true;
        this.courserCount = 5;
    }
}
let sultan = new user(person[0].name, person[0].phone);
let nam = document.querySelector("h1");
if (nam !== null) {
    nam.textContent = `${person[0].name}`;
}
else {
    alert(`can't find nam`);
}
console.log(sultan);
