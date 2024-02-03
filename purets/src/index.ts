type person = {
  readonly name: string;
  age: number;
  phone: number;
  alive: boolean;
};

const person: person[] = [
  { name: "sultan", age: 21, phone: 13232, alive: true },
  { name: "dipto", age: 23, phone: 13250, alive: false },
  { name: "abib", age: 28, phone: 13230, alive: true },
  { name: "sanjar", age: 25, phone: 13231, alive: false },
];

person.map((person: person, idnex): person => {
  console.log(person);
  return person;
});

// class user {
//   readonly name: string;
//   number: number;
//   constructor(name: string, number: number) {
//     this.name = name;
//     this.number = number;
//   }
// }

class user {
  protected _courserCount = 1;
  private readonly city: string = "";
  constructor(public name: string, public number: number) {}

  get courserCount(): number {
    return this.number;
  }

  set courserCount(countNum: number) {
    if (this.courserCount <= 0) {
      throw new Error("moye moye");
    }
    this.courserCount = countNum;
  }

  private deleteToken(token: string): string {
    return "token delelted successfully";
  }
}

class subUser extends user {
  isFamily: boolean = true;
  constructor() {
    super("sultan",789897)
    this.courserCount = 5;
  }
}

let sultan = new user(person[0].name, person[0].phone);

let nam: HTMLHeadElement | null = document.querySelector("h1");

if (nam !== null) {
  nam.textContent = `${person[0].name}`;
} else {
  alert(`can't find nam`);
}

console.log(sultan);
