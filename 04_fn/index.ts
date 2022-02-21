// function type expressions 

function greeter(fn: (a: string) => void) {
    fn("hello world");
}

function printToConsole(s: string) {
    console.log(s);
}

greeter(printToConsole);

type GreeterFunction = (a: string) => void;

function greeter2(fn: GreeterFunction) {
    // ...
}

type DescribableFunction = {
    description: string;
    (someArg: number): boolean;
}

function doSomething(fn: DescribableFunction) {
    console.log(fn.description + " returned " + fn(6));
}

// construct signatures
type SomeConstructo = {
    new (s: string): SomeObject;
}

function fn(ctor: SomeConstructo) {
    return new ctor("hello");
}

// Generic functions
function firstElement(arr: any[]) {
    return arr[0];
}

// in TS, generics are used when we want to describe a correspondence between two values. We do this by declaring a type parameter in the function signature
function firstElement2<Type>(arr: Type[]): Type {
    return arr[0];
}

const s = firstElement2(["a", "b", "c"]);

// inference - ts infers the generic type

function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
    return arr.map(func);
}

const parsed = map(["1", "2", "3"], (n) => parseInt(n));

// constraints
function longest<T extends { length: number }>(a: T, b: T) {
    if (a.length >= b.length) {
        return a;   
    } else {
        return b;
    }
}

const longerArr = longest([1, 2], [3, 4, 5]);
const logerStr = longest("al", "bob");

declare function f(x?: number): void;

f(undefined);

function myForEach(arr: any[], callbackFn: (arg: any, index?: number) => void) {
    for (let i = 0; i < arr.length; i++) {
        callbackFn(arr[i], i);
    }
}