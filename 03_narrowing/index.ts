function padLeft(padding: number | string, input: string) {
    if (typeof padding === "number") {
      return " ".repeat(padding) + input;
    }
    return padding + input;
}

// truthiness narrowing
function getUsersOnlineMessage(numUsersOnline: number) {
    if (numUsersOnline) {
      return `There are ${numUsersOnline} online now!`;
    }
    return "Nobody's here. :(";
}

// Equality narrowing
function example(x: string | number, y: string | boolean) {
    if (x === y) {
      // We can now call any 'string' method on 'x' or 'y'.
      x.toUpperCase();
            
  (method) String.toUpperCase(): string
      y.toLowerCase();
            
  (method) String.toLowerCase(): string
    } else {
      console.log(x);
                 
  (parameter) x: string | number
      console.log(y);
                 
  (parameter) y: string | boolean
    }
}