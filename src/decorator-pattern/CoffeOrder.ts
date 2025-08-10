// Component Interface - defines the operations that can be altered dynamically
export interface Coffee {
  cost(): number;
  description(): string;
}

// ConcreteComponent - the base object to be decorated
export class SimpleCoffee implements Coffee {
  public cost(): number {
    return 10;
  }

  public description(): string {
    return "Simple Coffee";
  }
}

// BaseDecorator - abstract class that implements the component interface and holds a reference to an IComponent
abstract class CoffeeDecorator implements Coffee {
  constructor(protected coffee: Coffee) {}

  abstract cost(): number;
  abstract description(): string;
}

// ConcreteDecoratorA - adds extra behavior to the component
export class MilkDecorator extends CoffeeDecorator {
  constructor(coffee: Coffee) {
    super(coffee);
  }
  public cost(): number {
    return this.coffee.cost() + 2;
  }

  public description(): string {
    return `${this.coffee.description()}, with milk`;
  }
}

// ConcreteDecoratorB - adds a different extra behavior to the component
export class SugarDecorator extends CoffeeDecorator {
  constructor(coffee: Coffee) {
    super(coffee);
  }
  public cost(): number {
    return this.coffee.cost() + 5;
  }

  public description(): string {
    return `${this.coffee.description()}, with sugar`;
  }
}

// Component Interface - IComponent (defines the core functionality)
// ConcreteComponent - the base object to be decorated
// Decorator - abstract class that implements IComponent and holds a reference to an IComponent
// ConcreteDecoratorA - adds extra behavior to the component
// ConcreteDecoratorB - adds different extra behavior to the component
// Client - works with components and decorators interchangeably

/**
*****Decorator Pattern Components******
 * 1. Component Interface - defines the operations that can be altered dynamically
 * 2. ConcreteComponent - the main object whose functionality we want to extend
 * 3. Decorator - base wrapper that implements the component interface and forwards calls
 * 4. ConcreteDecoratorA - extends behavior of the component in a specific way
 * 5. ConcreteDecoratorB - another extension with a different enhancement
 * 6. Client - uses components and decorators without knowing the difference
**/

/**
*****Use Cases******
 * 1. UI elements (e.g., adding scrollbars, borders, shadows dynamically)
 * 2. Logging functionality added to objects
 * 3. Data encryption/compression wrappers
 * 4. Runtime feature toggles or add-ons
 * 5. Extending functionality in middleware chains
**/
