// Builder interface
interface Builder {
  setPartA(): void;
  setPartB(): void;
  setPartC(): void;
}

class Product {
  private parts: string[] = [];

  public add(part: string): void {
    this.parts.push(part);
  }

  public listParts(): void {
    console.log(`Product Parts: ${this.parts.join(", ")}`);
  }
}

// Concrete Builder
class ConcreteBuilder implements Builder {
  private product!: Product;

  constructor() {
    this.reset();
  }

  public reset(): void {
    this.product = new Product();
  }

  public setPartA(): void {
    this.product.add("PartA");
  }

  public setPartB(): void {
    this.product.add("PartB");
  }

  public setPartC(): void {
    this.product.add("PartC");
  }

  public getProduct(): Product {
    const result = this.product;
    this.reset();
    return result;
  }
}

class Director {
  private builder!: Builder;

  public setBuilder(builder: Builder): void {
    this.builder = builder;
  }

  public buildMinimumProduct(): void {
    this.builder.setPartA();
  }

  public buildFullProduct(): void {
    this.builder.setPartA();
    this.builder.setPartB();
    this.builder.setPartC();
  }
}

// Client implementation
const builder = new ConcreteBuilder();
const director = new Director();
director.setBuilder(builder);

director.buildMinimumProduct();
let minProduct = builder.getProduct();
console.log(minProduct);

director.buildFullProduct();
let fullProduct = builder.getProduct();
console.log(fullProduct);

// Interface or Abstract Class  - IBuilder
// ConcreteBuilderA
// ConcreteBuilderB
// Product - e.g Vechicle
// Director

/**
*****Builder Pattern Components******
 * 1. Builder - can be an interface or abstract class
 * 2. ConcreteBuilderA
 * 3. ConcreteBuilderB
 * 4. Product (e.g car)
 * 5. Director --- uses abstract builder to construct car representations
**/

/**
 *** use cases*****
 * 1. Generating Documents
 * 2. Building Database queries
 * 3. Creating Game Characters
 * 4. Constructing a UI or form
**/