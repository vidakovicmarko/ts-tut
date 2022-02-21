var message = "Hello";
// fn with signature type annotations
function greet(person, date) {
    console.log("Hello ".concat(person, ", today is ").concat(date.toDateString()));
}
greet("Pero", new Date());
