interface ShapeProperties {
  color: string;
  x: number;
  y: number;
}

export abstract class Shape {
  constructor(public properties: ShapeProperties) {}
  abstract clone(): Shape;
}

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
