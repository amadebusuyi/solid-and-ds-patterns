import { CoffeeMakerFacade } from "../../facade-pattern/CoffeMaker.ts";
import { Amplifier, DvdPlayer, Projector, Lights, HomeTheaterFacade } from "../../facade-pattern/HomeTheatre.ts";

export const makeCoffee = () => {
    const coffeeMaker = new CoffeeMakerFacade();
    coffeeMaker.makeCoffee();
};

export const watchMovie = () => {
    let amplifier = new Amplifier();
    let dvdPlayer = new DvdPlayer();
    let projector = new Projector();
    let lights = new Lights();

    let homeTheater = new HomeTheaterFacade(
    amplifier,
    dvdPlayer,
    projector,
    lights
    );

    homeTheater.watchMovie("Inception", 10, 5);
};