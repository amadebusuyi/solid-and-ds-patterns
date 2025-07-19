// This file implements the Factory Method Pattern for creating different payment processors

// Product Interface / Abstract Class
abstract class PaymentProcessor {
  constructor(public amount: number) {}

  abstract processPayment(): void;
}

// Concrete Payment Processors
class PaypalProcessor extends PaymentProcessor {
  public processPayment(): void {
    console.log(`Process Paypal Payment: ${this.amount} `);
  }
}

class StripeProcessor extends PaymentProcessor {
  public processPayment(): void {
    console.log(`Process Stripe Payment: ${this.amount} `);
  }
}

class BankTransferProcessor extends PaymentProcessor {
  public processPayment(): void {
    console.log(`Process Bank Transfer: ${this.amount} `);
  }
}

// Creator (Abstract class or interface)
export abstract class PaymentProcessorCreator {
  abstract createProcessor(amount: number): PaymentProcessor;
}

// Concrete Creators (Factories)
export class PaypalProcessorCreator extends PaymentProcessorCreator {
  createProcessor(amount: number): PaymentProcessor {
    return new PaypalProcessor(amount);
  }
}

export class StripeProcessorCreator extends PaymentProcessorCreator {
  createProcessor(amount: number): PaymentProcessor {
    return new StripeProcessor(amount);
  }
}

export class BankTransferProcessorCreator extends PaymentProcessorCreator {
  createProcessor(amount: number): PaymentProcessor {
    return new BankTransferProcessor(amount);
  }
}

// Product (Interface/Abstract Class)
// ConcreteProductA
// ConcreteProductB
// Creator (Interface/Abstract Class)
// ConcreteCreatorA
// ConcreteCreatorB

/**
*****Factory Pattern Components******
 * 1. Product - interface for objects created
 * 2. ConcreteProductA
 * 3. ConcreteProductB
 * 4. Creator - declares factory method
 * 5. ConcreteCreatorA
 * 6. ConcreteCreatorB
**/

/**
 *** use cases*****
 * 1. Cross-platform UI elements
 * 2. Database connection pooling
 * 3. Document converters
 * 4. Game enemy generation
 * 5. Payment gateways
**/