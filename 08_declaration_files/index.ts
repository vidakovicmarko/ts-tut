declare namespace myLib {
    function makeGreeting(s: string): string;
    let numberOfGreetings: number;
}

let result = myLib.makeGreeting("hello world");
console.log("The computed greeting is:" + result);

let count = myLib.numberOfGreetings;

interface GreetingSettings {
    greeting: string;
    duration?: number;
    color?: string;
}

declare function greet(setting: GreetingSettings): void;

greet({
    greeting: "hello",
    duration: 4000
});

type GreetingLike = string | (() => string);
declare function greet(g: GreetingLike): void;