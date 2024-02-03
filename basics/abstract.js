"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var animal = /** @class */ (function () {
    function animal() {
    }
    animal.prototype.move = function () {
        console.log("i'm moving");
    };
    return animal;
}());
var dog = /** @class */ (function (_super) {
    __extends(dog, _super);
    function dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    dog.prototype.woof = function (times) {
        for (var i = 0; i <= times; i++) {
            console.log(" ".concat(i, " i'm woof "));
        }
        return 0;
    };
    return dog;
}(animal));
var d = new dog();
console.log(d.move());
console.log(d.woof(3));
var person = /** @class */ (function () {
    function person(name, age) {
        this.name = name;
        this.age = age;
    }
    return person;
}());
var person2 = new person("john doe", 25);
console.log(person2.name);
var user = /** @class */ (function () {
    function user(userName, userId) {
        this.userName = userName;
        this.userId = userId;
    }
    user.prototype.getname = function () {
        return this.userName;
    };
    user.prototype.getid = function () {
        return this.userId;
    };
    user.prototype.setName = function (name) {
        this.userName = name;
    };
    return user;
}());
var user2 = new user("sultan", 446546);
console.log(user2);
console.log(user2.getname());
console.log(user2.getid());
console.log(user2.setName("abib"));
console.log(user2.getname());
