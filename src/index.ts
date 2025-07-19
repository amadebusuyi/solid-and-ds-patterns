// Client code
import { calculateArea, calculatePerimeter, Rectangle, Circle } from "./oop-pillars/abstraction.ts";
import { makeCars, makePayments } from "./clients/factory/index.ts";
import { createCustomer } from "./clients/builder/index.ts";
import { makeCoffee, watchMovie } from "./clients/facade/index.ts";


// Example Usage of Abstraction
console.log("Abstraction Example:");
console.log("---");
const rectangle = new Rectangle(24, 10);
const circle = new Circle(10);
calculateArea(circle);
calculatePerimeter(rectangle);
console.log('----------------------------------------------------------\n');

// Example Usage of Factory Pattern
console.log("Factory Pattern Example:");
console.log("---");
console.log("Car Maker:");
makeCars();
console.log('---');
console.log("Payment Processor:");
makePayments();
console.log('----------------------------------------------------------\n');

// Example Usage of Builder Pattern
console.log("Builder Pattern Example:");
console.log("---");
console.log("Create Customer Data:");
createCustomer();
console.log('----------------------------------------------------------\n');

// Example Usage of Facade Pattern
console.log("Facade Pattern Example:");
console.log("---");
console.log("Coffee Maker:");
makeCoffee();
console.log('---')
console.log('Home Cinema:')
watchMovie();
console.log('----------------------------------------------------------\n');