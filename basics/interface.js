"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    _id: "jhisdf",
    name: "sultan",
    age: 20,
    paidUser: true,
    trail: function () {
        return "hello";
    },
    pro: function () {
        return "welcome back user ";
    }
};
console.log(User);
function checkUser(user) {
    return "Hello ".concat(user.name, " . It's your id  ").concat(user._id, " ");
}
var newUser = {
    name: "sultan",
    age: 21,
    paidUser: true,
    _id: "joybangla",
};
function anny(result) {
    return result;
}
var result1 = anny("sultan");
var result2 = anny(21);
var result3 = anny(true);
function dummy(result) {
    return result;
}
var result4 = dummy("sultan");
var result5 = dummy(21);
var result6 = dummy(true);
console.log(typeof result1);
console.log(typeof result2);
console.log(typeof result3);
console.log(typeof result4);
console.log(typeof result5);
console.log(typeof result6);
