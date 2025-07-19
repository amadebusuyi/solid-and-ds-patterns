export class Amplifier {
  public turnOn(): void {
    console.log("Amplifier is turned On");
  }

  public setVolume(level: number): void {
    console.log(`Volume is set to ${level}`);
  }
}

export class DvdPlayer {
  public turnOn(): void {
    console.log("The DVD Player is turned on");
  }

  public play(movie: string) {
    console.log(`Playing ${movie}`);
  }
}

export class Projector {
  public turnOn(): void {
    console.log("Projector is turned on");
  }

  public setInput(dvdPlayer: DvdPlayer): void {
    console.log("Input set to DvdPlayer");
  }
}

export class Lights {
  public dim(level: number): void {
    console.log(`Lights dimmed to ${level}`);
  }
}

export class HomeTheaterFacade {
  constructor(
    private amplifier: Amplifier,
    private dvdPlayer: DvdPlayer,
    private projector: Projector,
    private lights: Lights
  ) {}

  public watchMovie(movie: string, volume: number, level: number) {
    console.log(`Get Ready To Watch ${movie}`);
    this.lights.dim(level);
    this.amplifier.turnOn();
    this.amplifier.setVolume(volume);
    this.dvdPlayer.turnOn();
    this.projector.turnOn();
    this.projector.setInput(this.dvdPlayer);
    this.dvdPlayer.play(movie);
  }
}
