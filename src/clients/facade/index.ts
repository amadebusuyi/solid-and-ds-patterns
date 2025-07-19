import { Grinder, Boiler, Brewer, CoffeeMakerFacade } from "../../facade-pattern/CoffeMaker.ts";
import { Amplifier, DvdPlayer, Projector, Lights, HomeTheaterFacade } from "../../facade-pattern/HomeTheatre.ts";

export const makeCoffee = () => {
    // Client code
    const grinder = new Grinder();
    const boiler = new Boiler();
    const brewer = new Brewer();

    const coffeeMaker = new CoffeeMakerFacade(grinder, boiler, brewer);
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