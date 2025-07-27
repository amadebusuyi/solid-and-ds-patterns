class Rectangle {
  constructor(private width: number, private height: number) {}

  public getWidth(): number {
    return this.width;
  }

  public getHeight(): number {
    return this.height;
  }

  public area(): number {
    return this.width * this.height;
  }
}

export class Square {
  constructor(private side: number) {}

  public getSide(): number {
    return this.side;
  }

  public area(): number {
    return this.side * this.side;
  }
}

export class SquareToRectangleAdapter {
  constructor(private square: Square) {}

  public getWidth(): number {
    return this.square.getSide();
  }

  public getHeight(): number {
    return this.square.getSide();
  }

  public area(): number {
    return this.square.area();
  }
}

/**
*****Adapter Pattern Components******
 * 1. Client Interface - expected by the client
 * 2. Service - existing class with incompatible interface
 * 3. Adapter - bridges the gap between Service and Client
 * 4. Client - interacts only with Client interface
**/

/**
*****Use Cases******
 * 1. Integrating legacy APIs into new systems
 * 2. Wrapping third-party libraries with different interfaces
 * 3. Making incompatible classes work together
 * 4. Porting mobile/web components between frameworks
**/