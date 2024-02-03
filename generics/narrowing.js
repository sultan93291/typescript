"use strict";
// this file will be detect types
Object.defineProperty(exports, "__esModule", { value: true });
function detectTypes(value) {
    if (typeof value !== "number") {
        return value.toLocaleString();
    }
    return typeof value;
}
function ProvideId(id) {
    if (!id) {
        console.log("ProvideId to access your database");
    }
    return id === null || id === void 0 ? void 0 : id.toLocaleLowerCase();
}
function products(pro) {
    if (pro) {
        if (typeof pro === "object") {
            console.log(typeof pro);
            for (var _i = 0, pro_1 = pro; _i < pro_1.length; _i++) {
                var s = pro_1[_i];
                console.log(s);
                console.log(typeof s);
            }
            // we can also do the same thing with map functions
        }
        else if (typeof pro === "string") {
            return console.log(pro);
        }
    }
    else {
        return console.log("may be product basket is null");
    }
}
// products(["trimmer", "charger", "phone", "airbirds"]);
products("trimmer");
function isAdminAcc(account) {
    if ("isAdmin" in account) {
        console.log("user is admin");
        return account.isAdmin;
    }
    console.log("user is not admin");
    return account.userName;
}
// isAdminAcc({ userName: "sultan", email: "abibdipto@gmail.com", isAdmin: true });
isAdminAcc({ userName: "abib", email: "di9405060@gmail.com" });
function isDate(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
        return 0;
    }
    console.log(x.toLocaleUpperCase());
    return x.toLocaleLowerCase();
}
var date = new Date();
isDate(date);
function isFish(pet) {
    return pet.swim !== undefined;
}
function food(pet) {
    if (isFish(pet)) {
        pet;
        return;
    }
    else {
        pet;
        return;
    }
}
var x = Math.random() < 0.5 ? 10 : "hello world!";
console.log(x);
function calculateArea(shape) {
    if (shape.kind === "circle") {
        console.log(Math.PI * Math.pow(shape.radius, 2));
        return Math.PI * Math.pow(shape.radius, 2);
    }
    else if (shape.kind === "square") {
        console.log(Math.PI * Math.pow(shape.side, 2));
        return Math.PI * Math.pow(shape.side, 2);
    }
    else {
        throw new Error("undefined shape");
    }
}
function getARea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * Math.pow(shape.radius, 2);
        case "square":
            return Math.PI * Math.pow(shape.side, 2);
        case "rectangle":
            return Math.PI * Math.pow(shape.width, 2);
        default:
            var defaultShpae = shape;
            return defaultShpae;
    }
}
var circle = { kind: "circle", radius: 5 };
var square = { kind: "square", side: 4 };
calculateArea(circle);
calculateArea(square);
console.log(getARea(circle));
console.log(getARea(square));
