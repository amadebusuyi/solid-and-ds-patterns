// Client code
import { calculateArea, calculatePerimeter, Rectangle, Circle } from "./oop-pillars/abstraction.ts";
import { makeCars, makePayments } from "./clients/factory/index.ts";
import { createCustomer } from "./clients/builder/index.ts";
import { makeCoffee, watchMovie } from "./clients/facade/index.ts";
import { adaptDatabase, adaptSquareToRectangle } from "./clients/adapter/index.ts";
import { loadObserver, loadWeatherObserver } from "./clients/observer/index.ts";
import { filterStrategy, paymentStrategy } from "./clients/strategy/index.ts";
import { orderCoffee, serverRequest } from "./clients/decorator/index.ts";
import { productFactory, triggerRenderUI } from "./clients/abstract-factory.ts/index.ts";
import { triggerFileSystem, triggerRemote } from "./clients/command/index.ts";


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

// Example Usage of Adapter Pattern
console.log("Adapter Pattern Example:");
console.log("---");
console.log("Square to Rectangle adapter:");
adaptSquareToRectangle();
console.log('---')
console.log('Database adapter:')
adaptDatabase();
console.log('----------------------------------------------------------\n');

// Example Usage of Observer Pattern
console.log("Observer Pattern Example:");
console.log("---");
console.log("Observer:");
loadObserver();
console.log('---')
console.log("Weather Observer:");
loadWeatherObserver();
console.log('----------------------------------------------------------\n');

// Example Usage of Strategy Pattern
console.log("Strategy Pattern Example:");
console.log("---");
console.log("Payment Strategy:");
paymentStrategy();
console.log('---');
console.log("Filter Strategy:");
filterStrategy();
console.log('----------------------------------------------------------\n');

// Example Usage of Decorator Pattern
console.log("Decorator Pattern Example:");
console.log("---");
console.log("Coffee Order:");
orderCoffee();
console.log('---');
console.log("Server Request:");
serverRequest();
console.log('----------------------------------------------------------\n');

// Example Usage of Abstract Factory Pattern
console.log("Abstract Factory Pattern Example:");
console.log("---");
console.log('Product Factory:')
productFactory();
console.log('---');
console.log("Render UI:");
triggerRenderUI();
console.log('----------------------------------------------------------\n');

// Example Usage of Command Pattern
console.log("Command Pattern Example:");
console.log("---");
console.log('Remote Control:');
triggerRemote();
console.log('---');
console.log('File System Commands:');
triggerFileSystem();
console.log('----------------------------------------------------------\n');