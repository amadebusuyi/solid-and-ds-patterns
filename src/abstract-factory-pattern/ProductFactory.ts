/**
 * Abstract Factory Pattern Implementation:
 * - Defines an interface (IFactory) for creating related products (IProductA, IProductB) without specifying concrete classes.
 * - ProductA & ProductB: concrete products implementing their respective interfaces.
 * - Factory: concrete factory that produces instances of related products.
 * - Supports product collaboration (ProductB uses ProductA in combinedOperation).
 * - Client can work with IFactory, IProductA, and IProductB without depending on concrete implementations.
 */

// Abstract Product A - defines ProductA contract
interface IProductA {
  operationA(): string;
}

// Abstract Product B - defines ProductB contract
interface IProductB {
  operationB(): string;
  combinedOperation(collaborator: IProductA): string; // demonstrates collaboration between products
}

// Abstract Factory - defines methods for creating products
interface IFactory {
  createProductA(): IProductA;
  createProductB(): IProductB;
}

// Concrete Product A - specific implementation of IProductA
class ProductA implements IProductA {
  public operationA(): string {
    return "This is the result of Operation A";
  }
}

// Concrete Product B - specific implementation of IProductB
class ProductB implements IProductB {
  public operationB(): string {
    return "This is the result of Operation B";
  }

  public combinedOperation(collaborator: IProductA): string {
    const result = collaborator.operationA();
    return `The result of Product B collaborating with (${result})`;
  }
}

// Concrete Factory - creates related products
export class Factory implements IFactory {
  public createProductA(): IProductA {
    return new ProductA();
  }

  public createProductB(): IProductB {
    return new ProductB();
  }
}
