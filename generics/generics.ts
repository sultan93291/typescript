let score: Array<number> = [];

score = [1, 2, 3, 4, 5, 6];

function identity(val: number | boolean): number | boolean {
  console.log(typeof val);
  return val;
}

function identityTwo(val: any): any {
  console.log(typeof val);
  return val;
}

function identityThree<Type>(val: Type): Type {
  console.log(typeof val);
  return val;
}

identity(5);
identityTwo(5);
identityThree(5);

interface userACC {
  userName: string;
  userId: number;
}

function identitya(val: userACC): userACC {
  return val;
}

identitya({ userName: "sultan", userId: 25 });

function lgMethod<Type>(val: Type[]): Type[] {
  return val;
}

function lgMethodTwo<Type>(val: Array<Type>): Type {
  //calling form data base
  let mYIndex: number = 3;
  return val[mYIndex];
}

let myMd = <Type>(val: Type[]): Type => {
  let mYIndex: number = 3;
  return val[mYIndex];
};

interface dataBase {
  Connection: string;
  devices: number;
  isAlive: boolean;
}

function dataBaseConnection<T, U extends dataBase>(
  valOne: T,
  ValTwo: U
): object {
  return {
    valOne,
    ValTwo,
  };
}
console.log(
  dataBaseConnection(5, {
    Connection: "data",
    devices: 2,
    isAlive: true,
  })
);

interface Quiz {
  userName: string;
}

class Sells<T extends string> {
  public cart: T[] = [];

  addToCart(product: T) {
    this.cart.push(product);
  }
}

const product = new Sells();

product.addToCart("nothing");
console.log(product);

type user = {
  readonly userName: string;
  userId: number;
  isAlive: boolean;
  isPaid: boolean;
};

const person: user = {
  userName: "sultan",
  userId: 56564,
  isAlive: true,
  isPaid: false,
};

console.log(person.userName);

export {};
