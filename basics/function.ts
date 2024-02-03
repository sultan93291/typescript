function mydef(num: number): number {
  return num + 2;
}
// console.log(mydef(15));

const heros = ["ironman", "spiderman", "batman"];
heros.forEach((hero): void => {
  console.log(`hero is ${hero}`);
});

let dummy = (): string => {
  return "";
};
function status(num: number) {
  if (num > 5) {
    return true;
  }
  return "200";
}

function err1(err: string): void {
  console.log(err);
}

function err2(err: string): never {
  throw new Error(err);
}
let joybangla = (say: string):string => {
  return say;
}
console.log(joybangla("hello world!"));
export {};
