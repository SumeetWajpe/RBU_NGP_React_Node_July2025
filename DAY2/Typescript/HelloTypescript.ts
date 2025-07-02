//var msg = "Hello Typescript !"; // Type Inferencing
// msg = 100; // Error

var msg: string = "Hello Typescript !"; // Type annotation
console.log(msg);
var age: number = 18;
let isRaining: boolean; // declaration
isRaining = true; // definition

var x;
x = 10;
x = "Hi";
x = [10, 20];
x = false;

function Add(x: number, y: number): number | string {
  if (x == 0) {
    return "X must be greater than 0 !";
  }
  return x + y;
}

// Add("Hello", "Typescript"); // Error !
var result: number | string = Add(10, 20);
