const enum setlocation {
  window = "premuim",
  aisle = "business",
  middle = "economy",
}

let ticketValue = 15000;
if (ticketValue >= 10000) {
  console.log(` You got ${setlocation.window} seat  `);
} else if (ticketValue >= 5000) {
  console.log(` You got ${setlocation.aisle} `);
} else {
  console.log(` You got ${setlocation.middle}`);
}

type person = {
  readonly name: string;
  readonly age: number;
  alive: boolean;
};

function person(person: person): person {
  return person;
}

console.log(person({ name: "sultan", age: 20, alive: true }));

enum daysofweek {
  saturday,
  sunday,
  monday,
  tuesday,
  wednesday,
  thrusday,
  friday,
}

let today: daysofweek = daysofweek.sunday;

if (today === daysofweek.sunday) {
  console.log(` hey guys it's a holiday `);
}

export {};
