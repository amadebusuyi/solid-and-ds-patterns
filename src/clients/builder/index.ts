// Client code to use the Builder Pattern for creating a Customer object
import { ICustomer, ICustomerBuilder, CustomerBuilder, CustomerDirector } from "../../builder-pattern/Customer.ts";

export const createCustomer = () => {
    const customerBuilder: ICustomerBuilder = new CustomerBuilder();
    const customerDirector: CustomerDirector = new CustomerDirector(customerBuilder);
    const customer: ICustomer = customerDirector.buildMinimalCustomer(
      "Adebowale",
      "Adebusuyi",
      "amadebusuyi@gmail.com"
    );
    
    console.log(customer);
}