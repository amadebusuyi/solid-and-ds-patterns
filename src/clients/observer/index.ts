import { ConcreteObserver, ConcreteMailerObserver, ConcreteSubject } from "../../observer-pattern/Observer.ts";
import { CurrentConditionsDisplay, WeatherData } from "../../observer-pattern/Weather.ts";

export const loadObserver = () => {
    const subject = new ConcreteSubject();
    
    const observer1 = new ConcreteObserver(1);
    subject.addObserver(observer1);
    
    const observer2 = new ConcreteMailerObserver(2);
    subject.addObserver(observer2);
    
    subject.setState(123);
}

export const loadWeatherObserver = () => {
    const weatherData = new WeatherData();
    // const currentDisplay = new CurrentConditionsDisplay(weatherData);

    // Simulate new Weather Adjustments
    weatherData.setMeasurements(80, 65, 30.4);
    weatherData.setMeasurements(82, 70, 30.4);
}