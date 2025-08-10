import { Coffee, MilkDecorator, SimpleCoffee, SugarDecorator } from "../../decorator-pattern/CoffeOrder.ts";
import { AuthMiddleware, BaseServer, LoggingMiddleware, ServerRequest } from "../../decorator-pattern/ServerRequest.ts";

export const orderCoffee = () => {
    let coffee: Coffee = new SimpleCoffee();
    coffee = new MilkDecorator(coffee);
    coffee = new SugarDecorator(coffee);
    
    console.log(`Cost: ${coffee.cost()}`);
    console.log(`Description: ${coffee.description()}`);
}

export const serverRequest = () => {
    const request = {
        isAuthenticated: false,
        body: "hello world",
    };

    let server: ServerRequest = new BaseServer();
    server = new LoggingMiddleware(server);
    server = new AuthMiddleware(server);
    server.handle(request);
}
