import { GreyScaleStrategy, ImageProcessor, SepiaStrategy } from "../../strategy-pattern/FilterStrategy.ts";
import { CreditCardStrategy, PaypalStrategy, ShoppingCart } from "../../strategy-pattern/PaymentStrategy.ts";


export const paymentStrategy = () => {
    let cart = new ShoppingCart(new PaypalStrategy());
    cart.addToCart(100);
    cart.addToCart(50);
    cart.checkout();
    
    cart.setPaymentStrategy(new CreditCardStrategy());
    cart.addToCart(100);
    cart.checkout();
}

export const filterStrategy = () => {
    const imageProcessor = new ImageProcessor(new GreyScaleStrategy());
    imageProcessor.applyFilter("Image.jpg");

    imageProcessor.setFilterStrategy(new SepiaStrategy());
    imageProcessor.applyFilter("Image2.jpg");
}