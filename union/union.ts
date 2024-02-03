// in this file we are gonna explore union type data we are gonna use union instead of any ;

// notice we can assign multiple type in a varriable and while we are trying to push number and string it's allowing us . but if we push anything that haven't declared as a type it will give us a error . we can use union instead of any . it's  much better .

let score: number | string = 33;

score = 12;

score = "55";

// score = true;

type user = {
  username: string;
  id: number;
};
type admin = {
  superior: string;
  id: number;
};

let Users: user | admin = { username: "sultan", id: 334 };
Users = { superior: "sanjar", id: 553 };

function dbchk(id: number | string): number | string {
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
let arr4: (string | number | boolean)[] = [1, "sultan", "true"];
let arr5: (string | number | boolean)[][] = [["sultan"], [5], [true]];

console.log(arr5[1]);

// now check a one more example of union type

let gnuser: "free" | "paid"

gnuser = "admin"

// in this example think about a site which don't allow a general user to become a admin . so if anyone try to make them a admin it won't be possible . it will allow them to become a free or a paid user . bye the way you can customize it according to your requirements. 

export {};
