import { CarFactory } from "../../factory-pattern/CarMaker.ts";
import { PaymentProcessorCreator, PaypalProcessorCreator, StripeProcessorCreator, BankTransferProcessorCreator } from "../../factory-pattern/PaymentProcessor.ts";    


// Example Usage of Factory Pattern
export const makeCars = () => {
    const carFactory = new CarFactory();
    const sedan = carFactory.createcar("sedan", "Camry", 2023);
    sedan.displayCarInfo();
    const suv = carFactory.createcar("suv", "RAV4", 2023);
    suv.displayCarInfo();
    const hatchback = carFactory.createcar("hatchback", "Corolla", 2023);
    hatchback.displayCarInfo();
}

export const processPayment = (type: "paypal" | "stripe" | "bank", amount: number) => {
  let creator: PaymentProcessorCreator;

  switch (type) {
    case "paypal":
      creator = new PaypalProcessorCreator();
      break;
    case "stripe":
      creator = new StripeProcessorCreator();
      break;
    case "bank":
      creator = new BankTransferProcessorCreator();
      break;
    default:
      throw new Error("Invalid payment processor type");
  }

  const processor = creator.createProcessor(amount);
  processor.processPayment();
};

// Example Usage of Factory Pattern
export const makePayments = () => {
    processPayment("paypal", 200);
    processPayment("stripe", 500);
    processPayment("bank", 1000);
};