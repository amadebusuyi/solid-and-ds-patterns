interface PaymentStrategy {
  pay(amount: number): void;
}

export class PaypalStrategy implements PaymentStrategy {
  public pay(amount: number): void {
    console.log(`Paid ${amount} using PayPal`);
  }
}

export class CreditCardStrategy implements PaymentStrategy {
  public pay(amount: number): void {
    console.log(`Paid ${amount} using credit card`);
  }
}

export class BitcoinStrategy implements PaymentStrategy {
  public pay(amount: number): void {
    console.log(`Paid ${amount} using Bitcoin`);
  }
}

export class ShoppingCart {
  private amount: number = 0;

  constructor(private strategy: PaymentStrategy) {}

  public setPaymentStrategy(strategy: PaymentStrategy): void {
    this.strategy = strategy;
  }

  public addToCart(value: number): void {
    this.amount += value;
  }

  public checkout(): void {
    this.strategy.pay(this.amount);
    this.amount = 0;
  }
}

// Strategy Interface - IStrategy (defines algorithm interface)
// ConcreteStrategyA - one way to implement the algorithm
// ConcreteStrategyB - a different algorithm implementation
// Context - uses IStrategy and delegates the behavior to the chosen strategy
// Client - Interacts with the Context and passes the desired strategy

/**
*****Strategy Pattern Components******
 * 1. Strategy Interface - defines a family of interchangeable algorithms
 * 2. ConcreteStrategyA - one specific way to perform an action
 * 3. ConcreteStrategyB - another valid approach
 * 4. Context - holds a reference to a strategy and uses it to perform its task
 * 5. Client - Interacts with the context and passes the desired strategy
**/

/**
*****Use Cases******
 * 1. Payment gateways (e.g., PayPal, Stripe, BankTransfer)
 * 2. Sorting algorithms (e.g., quicksort, mergesort, bubblesort)
 * 3. File compression (e.g., ZIP, RAR, 7Z)
 * 4. Data validation or formatting strategies
 * 5. AI behaviors in games (e.g., aggressive, defensive, random)
**/
