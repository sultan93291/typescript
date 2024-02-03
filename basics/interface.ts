interface user {
  readonly _id: string;
  name: string;
  age: number;
  paidUser: boolean;
  trail(): string,
  pro:()=> string
}

const User:user = {
  _id: "jhisdf",
  name: "sultan",
  age: 20,
  paidUser : true,
  trail:()=> {
  return "hello"
  },
  pro: () => {
    return "welcome back user "
  }
}
console.log(User)

function checkUser(user: user) {
  return `Hello ${user.name} . It's your id  ${user._id} `;
}

// console.log(
//   checkUser({
//     name: "sultan",
//     age: 21,
//     paidUser: true,
//     _id: "lk;sdklfsdl;kfksd",
//   })
// );

type User = {
  readonly _id: string;
  name: string;
  age: number;
  paidUser: boolean;
};

let newUser: User = {
  name: "sultan",
  age: 21,
  paidUser: true,
  _id: "joybangla",
};

function anny<Type>(result: Type): Type {
  return result;
}

let result1 = anny("sultan");
let result2 = anny(21);
let result3 = anny(true);

function dummy(result: any): any{
  return result
}
let result4:any = dummy("sultan");
let result5:any = dummy(21);
let result6:any = dummy(true);

console.log(typeof result1);
console.log(typeof result2);
console.log(typeof result3);
console.log(typeof result4);
console.log(typeof result5);
console.log(typeof result6);



export {};
