const message: string = "Hello";

// fn with signature type annotations
function greet(person: string, date: Date): void {
    console.log(`Hello ${person}, today is ${date.toDateString()}`);
}

greet("Pero", new Date());