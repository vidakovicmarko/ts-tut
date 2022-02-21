let myName: string = "Pero";

// Parameter type annotation
function greet(name: string) {
    console.log("Hello, " + name.toUpperCase() + "!!");
}

// greet(42);
greet("Pero");

// Return type annotation
function getFavoriteNumber(): number {
    return 26;
}

// Anonymous fn

// No type annotations here, but ts can spot the bug
const names = ["Alice", "Bob", "Eve"];

// Contextual typing for fn
names.forEach(function (s) {
    // console.log(s.toUppercase());
    console.log(s.toUpperCase());
});

// Object types

function printCoord(pt: { x: number; y: number }) {
    console.log("The coordinate'x value is " + pt.x);
    console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 3, y: 7 });

// optional properties
function printName(obj: { first: string; last?: string }) {
    // Error
    // console.log(obj.last.toUpperCase());

    if (obj.last !== undefined) {
        console.log(obj.last.toUpperCase());
    }

    // safe alternative
    console.log(obj.last?.toUpperCase());
}

printName({ first: "Bob" });
printName({ first: "Alice", last: "Alisson" });

// Union types

function printId(id: number | string) {
    console.log("Your ID is: " + id);

    if (typeof id === "string") {
        console.log(id.toUpperCase());
    } else {
        console.log(id);
    }
}

// OK
printId(101);
// OK
printId("202");
// Error
printId({ myID: 22342 });

function welcomePeople(x: string[] | string) {
    if (Array.isArray(x)) {
      // Here: 'x' is 'string[]'
      console.log("Hello, " + x.join(" and "));
    } else {
      // Here: 'x' is 'string'
      console.log("Welcome lone traveler " + x);
    }
}

function getFirstThree(x: number[] | string) {
    return x.slice(0, 3);
}

// Type aliases

type Point = {
    x: number;
    y: number;
};

function printCoord(pt: Point) {

}

printCoord({ x: 100, y: 100 });

// You can actually use a type alias to give a name to any type at all, not just an object type. For example, a type alias can name a union type:
type ID = number | string;

// Interfaces

// an interface declaration is another way to name an object type:

interface Point {
    x: number;
    y: number;
}

/**
 * Type aliases and interfaces are very similar, and in may cases you can choose between them freely.
 * Almost all features of an interface are available in type,
 * the key distinction is that a type cannot be re-opened to add new properties
 * vs an interface which is always extendable
 */

// extending an interface
interface Animal {
    name: string;
}

interface Bear extends Animal {
    honey: boolean;
}

const bear = getBear();
bear.name
bear.honey

// extending a type via intersections
type Animal = {
    name: string;
}

type Bear = Animal & {
    honey: boolean;
}

const bear = getBear();
bear.name
bear.honey

// adding new fields to an existing interface
interface window {
    title: string;
}

interface window {
    ts: TypeScriptAPI
}

const src = 'const a = "Hello World"';
window.statusbar.transpileMOdule(src, {});

// a type cannot be changed after being created
type Window = {
    title: string;
}

type Window = {
    ts: TypeScriptAPI
}

// Error: Duplicate identifier 'Window'

// Type assertions

const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
// you can use the angle-bracket syntax - exept if the code is in a .tsx file
const myCanvas = <HTMLCanvasElement>document.getElementById("main_canvas");

// non-null assertion operator (Postfix!)
function liveDangerously(x?: number | null) {
    // No error
    console.log(x!.toFixed());
}