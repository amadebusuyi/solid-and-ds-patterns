export abstract class CakeRecipe {
  public bakeCake(): void {
    this.preHeatOven();
    this.mixIngredients();
    this.bake();
    this.coolingDown();
    this.decorate();
  }

  protected preHeatOven(): void {
    console.log("Preheating oven to 175 Degree C");
  }

  protected bake(): void {
    console.log("Baking cake ....");
  }

  protected coolingDown(): void {
    console.log("Cooling down the cake ...");
  }

  protected decorate(): void {
    console.log("Decorating cake ...");
  }

  protected abstract mixIngredients(): void;
}

export class ChocolateCake extends CakeRecipe {
  protected mixIngredients(): void {
    console.log("Mixing: chocolate, sugar, butter, flour, eggs");
  }

  protected decorate(): void {
    console.log(" Decorating cake with chocolate");
  }
}

export class VanillaCake extends CakeRecipe {
  protected mixIngredients(): void {
    console.log("Mixing: vanilla extract, sugar, butter, flour, eggs");
  }
}