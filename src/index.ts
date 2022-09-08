let sales: number = 123_456_789; // you can make numbers more readable.
let course = "TypeScript"; // even without specifying "string", TS will know it is a string.
// any type *********************************************
let level; // this will be type "any". However, it is not good practice.

// Arrays *********************************************
let numberArray1 = []; // type: any this should be avoided.
//let numberArray2: number[] = [1, 2, "3"];
let numberArray3 = [1, 2, "3"]; // type: (string | number) []

// *********************************************
// more than two kinds of data
let user: [number, string] = [1, "Mosh"];

// Enums *********************************************
// PascalCase
const enum Size {
  Small = 1,
  Medium,
  Large,
}
let mySize: Size = Size.Medium;
console.log(mySize);

// from official document
/*
enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}
Above, we have a numeric enum where Up is initialized with 1. All of the following members are auto-incremented from that point on. In other words, Direction.Up has the value 1, Down has 2, Left has 3, and Right has 4.
*/

// functions *********************************************
// you can define return value type too.
// The below example gives an error,
// because there is no return value the condition is false
//function calculateTax(income: number): number {
//    if(income < 50_000) {
//        return income * 1.2
//    }
//}

function calculateTax(income: number): number {
  if (income < 50_000) {
    return income * 1.2;
  }
  return income * 1.3;
}

// Objects *********************************************
// This will be invalid. name is not defined.
// let employee = {id: 1};
//  employee.name = "Azusa";

let employee: {
  id: number;
  name?: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: "Azusa",
  retire: (date: Date) => {
    console.log(date);
  },
};

// Type Aliases *********************************************
type Workers = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let worker: Workers = {
  id: 1,
  name: "Azusa",
  retire: (date: Date) => {
    console.log(date);
  },
};

// Union types *********************************************
function kgToLbs(weight: number | string): number {
  if (typeof weight === "number") {
    // compiler will know this is a number
    return weight * 2.2;
  } else {
    return parseInt(weight) * 2.2; // compiler will know this is a string.
  }
}

// Intersection types *********************************************
type Draggable = {
  drag: () => void;
};

type Resizable = {
  resize: () => void;
};

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () => {},
  resize: () => {},
};

// Literal types *********************************************
// Literal (exact, specific)
type Quantity = 50 | 100;
let quantity: Quantity = 100;

type Metric = "cm" | "inch";

// Nullable types *********************************************
// In this case, toUpperCase() can not be apppied to null
//function greet(name: string) {
//    console.log(name.toUpperCase())
//}
//
//greet(null)

function greet(name: string | null | undefined) {
  if (name) {
    console.log(name.toUpperCase());
  } else {
    console.log("hello");
  }
}

greet(undefined);

// Optional Chaining *********************************************

type Customer = {
  birthday: Date;
};

function getCustomer(id: number): Customer | null {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getCustomer(0);
// Optional property access operator (?)
console.log(customer?.birthday?.getFullYear());

// Optional element access operator
// customers?.[0]

// Optional call
let log: any = null;
log?.("a");
