export class Grinder {
  public grindBeans(): void {
    console.log("Grinding beans ...");
  }
}

export class Boiler {
  public boilWater(): void {
    console.log("Boiling Water ...");
  }
}

export class Brewer {
  public brewCoffee(): void {
    console.log("Brewing Coffee ...");
  }
}
export class CoffeeMakerFacade {
  protected grinder: Grinder;
  protected boiler: Boiler;
  protected brewer: Brewer;
  constructor(
    grinder?: Grinder,
    boiler?: Boiler,
    brewer?: Brewer,
  ) {
    this.grinder = grinder || new Grinder();
    this.boiler = boiler || new Boiler();
    this.brewer = brewer || new Brewer();
  }

  public makeCoffee() {
    this.grinder.grindBeans();
    this.boiler.boilWater();
    this.brewer.brewCoffee();
    console.log("The Coffee is ready");
  }
}

// Facade - e.g. OrderProcessor
// Subsystem Class 1
// Subsystem Class 2
// Client

/**
*****Facade Pattern Components******
 * 1. Facade - simplified interface to subsystem
 * 2. Subsystem Classes - complex classes facade interacts with
 * 3. Client - uses the Facade
**/

/**
 *** use cases*****
 * 1. Online Shopping System
 * 2. Compiling Code
 * 3. Multimedia Conversion
 * 4. Reporting Systems
 * 5. Home Automation Systems
**/
