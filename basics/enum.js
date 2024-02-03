"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ticketValue = 15000;
if (ticketValue >= 10000) {
  console.log(
    " You got ".concat("premuim" /* setlocation.window */, " seat  ")
  );
} else if (ticketValue >= 5000) {
  console.log(" You got ".concat("business" /* setlocation.aisle */, " "));
} else {
  console.log(" You got ".concat("economy" /* setlocation.middle */));
}
function person(person) {
  return person;
}
console.log(person({ name: "sultan", age: 20, alive: true }));
console.log((person.name = "sanjar"));
var daysofweek;
(function (daysofweek) {
  daysofweek[(daysofweek["saturday"] = 0)] = "saturday";
  daysofweek[(daysofweek["sunday"] = 1)] = "sunday";
  daysofweek[(daysofweek["monday"] = 2)] = "monday";
  daysofweek[(daysofweek["tuesday"] = 3)] = "tuesday";
  daysofweek[(daysofweek["wednesday"] = 4)] = "wednesday";
  daysofweek[(daysofweek["thrusday"] = 5)] = "thrusday";
  daysofweek[(daysofweek["friday"] = 6)] = "friday";
})(daysofweek || (daysofweek = {}));
var today = daysofweek.sunday;
if (today === daysofweek.sunday) {
  console.log(" hey guys it's a holiday ");
}
