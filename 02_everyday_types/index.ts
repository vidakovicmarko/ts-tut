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