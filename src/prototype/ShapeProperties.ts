// Properties interface
interface ShapeProperties {
  color: string;
  x: number;
  y: number;
}

// Prototype Interface - e.g. Shape
export abstract class Shape {
  constructor(public properties: ShapeProperties) {}
  abstract clone(): Shape;
}

// Concrete Prototype 1 - Rectangle
export class Rectangle extends Shape {
  constructor(
    properties: ShapeProperties,
    public width: number,
    public height: number
  ) {
    super(properties);
  }

  public clone(): Shape {
    let clonedProperties: ShapeProperties = {
      color: this.properties.color,
      x: this.properties.x,
      y: this.properties.y,
    };

    return new Rectangle(clonedProperties, this.width, this.height);
  }
}

// Concrete Prototype 2 - Circle
export class Circle extends Shape {
  constructor(properties: ShapeProperties, public radius: number) {
    super(properties);
  }

  public clone(): Shape {
    let clonedProperties: ShapeProperties = {
      color: this.properties.color,
      x: this.properties.x,
      y: this.properties.y,
    };

    return new Circle(clonedProperties, this.radius);
  }
}

// Prototype Interface - e.g. Shape
// Concrete Prototype 1 - Circle
// Concrete Prototype 2 - Rectangle
// Client

/**
*****Prototype Pattern Components******
 * 1. Prototype - declares the cloning interface
 * 2. Concrete Prototypes - implement cloning
 * 3. Client - creates new objects by cloning prototypes
**/

/**
 *** use cases*****
 * 1. Graphic Editors (clone shapes, images, components quickly)
 * 2. Game Development (duplicate NPCs, weapons, characters)
 * 3. Document Editing (duplicate text styles, templates)
 * 4. AI/ML Systems (clone model configurations or experiment setups)
 * 5. Configuration Management (clone environment setups, server configs)
**/

