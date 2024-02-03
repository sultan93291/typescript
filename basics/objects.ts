// const User = {
//   username: "sultan",
//   age: "21",
//   isActive: true,
// };

// let newUser = { name: "sultan", ispaid: true, email: "abibdipto@gmail.com" };

// function createCourse(): { name: string; price: number } {
//   return { name: "mern", price: 1500 };
// }

// console.log(createCourse());

// type user = {
//   name: string;
//   email: string;
//   ispaid: boolean;
// };

// function createuser(user: user): user {
//   return user;
// }

// let newuser = { name: "sultan", email: "abibdipto@gmail.com", ispaid: true };
// console.log(createuser(newuser));

// const we = ["sultan", "dipto", "abib", "sanjar "];

// we.map(one => {
//   console.log(one.toLocaleUpperCase());
// });

type User = {
  name: string;
  email: string;
  readonly isActive: boolean;
  isPaid?: boolean;
};

let oldUser: User = {
  name: "sultan ",
  email: "a@a.com",
  isActive: true,
  isPaid: false,
};

console.log(oldUser.isPaid);

type creditNumber = {
  cardNumber: string;
};
type cardExpDate = {
  cardDAte: Date;
};

type cardDetails = creditNumber &
  cardExpDate & {
    cvvNumber: number;
  };

let cadF = (details: cardDetails): cardDetails => {
  return details;
};

let DAte = new Date(2024, 11, 5);

let newCdf = cadF({
  cardNumber: "lsdkfj",
  cardDAte: DAte,
  cvvNumber: 36313,
});

console.log(newCdf);

let dt = "2024-12-04T18:00:00.000Z";
let dtt = new Date(dt).toLocaleDateString();
console.log(dtt);

export {};
