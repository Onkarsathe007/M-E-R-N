// ---------- BASIC TYPES ----------
let id: number = 101;
let username: string = "Onkar";
let isAdmin: boolean = true;
let nothing: null = null;
let notDefined: undefined = undefined;
let bigNumber: bigint = 9007199254740991n;
let uniqueId: symbol = Symbol("id");

// ---------- ARRAY TYPES ----------
let numbers: number[] = [1, 2, 3];
let names: string[] = ["ram", "sham"];
let mixedArray: (number | string)[] = [1, "hello"];

// ---------- TUPLES ----------
let userTuple: [number, string, boolean] = [1, "Onkar", true];

// ---------- ENUMS ----------
enum Role {
  USER = "USER",
  ADMIN = "ADMIN",
}
let userRole: Role = Role.ADMIN;

// ---------- OBJECT TYPES ----------
let user: { id: number; name: string; active: boolean } = {
  id: 10,
  name: "Onkar",
  active: true,
};

// ---------- ANY (not recommended) ----------
let something: any = "hello";
something = 10; // allowed

// ---------- UNKNOWN (safer alternative to any) ----------
let value: unknown = "hello";
if (typeof value === "string") {
  console.log(value.toUpperCase());
}

// ---------- UNION TYPES ----------
let data: number | string = 20;
data = "Hello";

// ---------- INTERSECTION TYPES ----------
type Person = { name: string };
type Employee = { salary: number };
let employee: Person & Employee = {
  name: "Onkar",
  salary: 50000,
};

// ---------- LITERAL TYPES ----------
let direction: "UP" | "DOWN" | "LEFT" | "RIGHT";
direction = "UP"; // only these allowed

// ---------- FUNCTION TYPES ----------
function add(a: number, b: number): number {
  return a + b;
}

const greet = (name: string): void => {
  console.log("Hello " + name);
};

// ---------- NEVER TYPE ----------
function throwError(message: string): never {
  throw new Error(message);
}

// ---------- TYPE ALIASES ----------
type User = {
  id: number;
  name: string;
};

const u1: User = { id: 1, name: "John" };

// ---------- INTERFACES ----------
interface Car {
  model: string;
  price: number;
}
const car: Car = {
  model: "Tesla",
  price: 50000,
};

// ---------- GENERICS ----------
function box<T>(value: T): T {
  return value;
}
let boxedNumber = box<number>(123);
let boxedString = box<string>("hello");

// ---------- CLASSES ----------
class PersonClass {
  constructor(
    public name: string,
    private age: number,
  ) {}

  getAge(): number {
    return this.age;
  }
}
const p = new PersonClass("Onkar", 22);
