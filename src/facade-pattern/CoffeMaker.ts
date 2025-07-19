export class Grinder {
  public grindBeads(): void {
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
  constructor(
    private grinder: Grinder,
    private boiler: Boiler,
    private brewer: Brewer
  ) {}

  public makeCoffee() {
    this.grinder.grindBeads();
    this.boiler.boilWater();
    this.brewer.brewCoffee();
    console.log("The Coffee is ready");
  }
}

// Facade - e.g. OrderProcessor
// Subsystem Class 1 - e.g. InventoryService
// Subsystem Class 2 - e.g. PaymentGateway
// Subsystem Class 3 - e.g. ShippingService
// Subsystem Class 4 - e.g. NotificationService
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
