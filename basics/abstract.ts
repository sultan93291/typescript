class animal {
  move() {
    console.log("i'm moving");
  }
}

class dog extends animal {
  woof(times: number): number {
    for (let i = 0; i <= times; i++) {
      console.log(` ${i} i'm woof `);
    }
    return 0;
  }
}

const d = new dog();

console.log(d.move());
console.log(d.woof(3));

class person {
  constructor(public name: string, public age: number) {}
}

const person2 = new person("john doe", 25);
console.log(person2.name);

class user {
  userName: string;
  userId: number;
  constructor(userName: string, userId: number) {
    this.userName = userName;
    this.userId = userId;
  }

  getname(): string {
    return this.userName;
  }

  getid(): number {
    return this.userId;
  }

  setName(name: string): void {
    this.userName = name;
  }
}

const user2 = new user("sultan", 446546);
console.log(user2);

console.log(user2.getname());
console.log(user2.getid());
console.log(user2.setName("abib"));
console.log(user2.getname());
export {};
