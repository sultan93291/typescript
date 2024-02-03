// this file will be detect types

function detectTypes(value: string | number): string | number {
  if (typeof value !== "number") {
    return value.toLocaleString();
  }
  return typeof value;
}

function ProvideId(id: string | null) {
  if (!id) {
    console.log("ProvideId to access your database");
  }
  return id?.toLocaleLowerCase();
}

function products(pro: string | string[] | null) {
  if (pro) {
    if (typeof pro === "object") {
      console.log(typeof pro);
      for (const s of pro) {
        console.log(s);
        console.log(typeof s);
      }
      // we can also do the same thing with map functions
    } else if (typeof pro === "string") {
      return console.log(pro);
    }
  } else {
    return console.log("may be product basket is null");
  }
}

// products(["trimmer", "charger", "phone", "airbirds"]);
products("trimmer");
// console.log(detectTypes("sultan"));
// console.log(ProvideId(""));

interface user {
  userName: string;
  email: string;
}
interface admin {
  userName: string;
  email: string;
  isAdmin: boolean;
}

function isAdminAcc(account: user | admin) {
  if ("isAdmin" in account) {
    console.log("user is admin");
    return account.isAdmin;
  }
  console.log("user is not admin");
  return account.userName;
}

// isAdminAcc({ userName: "sultan", email: "abibdipto@gmail.com", isAdmin: true });
isAdminAcc({ userName: "abib", email: "di9405060@gmail.com" });
export {};

function isDate(x: Date | string) {
  if (x instanceof Date) {
    console.log(x.toUTCString());
    return 0;
  }
  console.log(x.toLocaleUpperCase());
  return x.toLocaleLowerCase();
}

let date: Date = new Date();

isDate(date);

type fish = { swim: () => void };
type bird = { fly: () => void };

function isFish(pet: fish | bird): pet is fish {
  return (pet as fish).swim !== undefined;
}

function food(pet: fish | bird) {
  if (isFish(pet)) {
    pet;
    return;
  } else {
    pet;
    return;
  }
}
let x = Math.random() < 0.5 ? 10 : "hello world!";

console.log(x);

interface circle {
  kind: "circle";
  radius: number;
}
interface square {
  kind: "square";
  side: number;
}

interface recgtangle {
  kind: "rectangle";
  length: number;
  width: number;
}

type shape = circle | square | recgtangle;

function calculateArea(shape: shape) {
  if (shape.kind === "circle") {
    console.log(Math.PI * shape.radius ** 2);
    return Math.PI * shape.radius ** 2;
  } else if (shape.kind === "square") {
    console.log(Math.PI * shape.side ** 2);
    return Math.PI * shape.side ** 2;
  } else {
    throw new Error("undefined shape");
  }
}

function getARea(shape: shape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return Math.PI * shape.side ** 2;
    case "rectangle":
      return Math.PI * shape.width ** 2;
    default:
      const defaultShpae: never = shape;
      return defaultShpae;
  }
}

const circle: circle = { kind: "circle", radius: 5 };
const square: square = { kind: "square", side: 4 };

calculateArea(circle);
calculateArea(square);
console.log(getARea(circle));
console.log(getARea(square));
