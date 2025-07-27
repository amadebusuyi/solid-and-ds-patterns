interface FilterStrategy {
  apply(image: string): void;
}

export class GreyScaleStrategy implements FilterStrategy {
  public apply(image: string): void {
    console.log(`Applying greyscale filter to ${image}`);
  }
}

export class SepiaStrategy implements FilterStrategy {
  public apply(image: string): void {
    console.log(`Applying sepia filter to ${image}`);
  }
}

export class NegativeStrategy implements FilterStrategy {
  public apply(image: string): void {
    console.log(`Applying negative filter to ${image}`);
  }
}

export class ImageProcessor {
  constructor(private strategy: FilterStrategy) {}

  public setFilterStrategy(strategy: FilterStrategy): void {
    this.strategy = strategy;
  }

  public applyFilter(image: string): void {
    this.strategy.apply(image);
  }
}
