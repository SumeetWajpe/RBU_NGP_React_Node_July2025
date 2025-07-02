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

// Optional parameters
// function PrintBook(author?: string, title?: string, numOfPages?: number) {
//   console.log(author, title, numOfPages);
// }

// PrintBook();
// PrintBook("XYZ");
// PrintBook("Dr. APJ Abdul Kalam", "Wings Of Fire");

// Default parameters
// function PrintBook(author: string, title: string, numOfPages: number = 100) {
//   console.log(author, title, numOfPages);
// }
// PrintBook("Dr. APJ Abdul Kalam", "Wings Of Fire", 400);

// var cars = ["BMW", "AUDI", "Merc"];
// var cars: string[] = ["BMW", "AUDI", "Merc"];

// Rest Parameters
function PrintBook(author: string, ...titles: string[]): void {
  console.log(author, titles);
}

PrintBook("Dr. APJ Abdul Kalam", "Wings Of Fire", "India 2020");

// class

class Car {
  private id: number = 1;
  name: string;
  speed: number;

  constructor(name = "BMW", speed = 200) {
    this.name = name;
    this.speed = speed;
  }
  accelerate(): string {
    return "The car " + this.name + " is running at " + this.speed + " kmph !";
  }
}
// var carObj = new Car();
// console.log(carObj.accelerate());

class JamesBondCar extends Car {
  canFly: boolean;
  canSubmerge: boolean;
  constructor(
    name: string,
    speed: number,
    canFly: boolean,
    canSubmerge: boolean,
  ) {
    super(name, speed);
    this.canFly = canFly;
    this.canSubmerge = canSubmerge;
  }

  accelerate(): string {
    return super.accelerate() + " Can it fly ? " + this.canFly;
  }
}

var jbc = new JamesBondCar("Aston Martin", 300, true, true);
console.log(jbc.accelerate());

// interface IPlayer {
//   name: string;
//   sport: string;
// }

type Player = {
  name: string;
  sport: string;
};

var player: Player = { name: "Djokovic", sport: "Tennis", xyz: 123 };

interface IEmployee {
  name: string;
  salary: number;
  getSalary: () => number;
}

class Emp implements IEmployee {
  name: string;
  salary: number;
  getSalary(): number {
    return this.salary;
  }
}
