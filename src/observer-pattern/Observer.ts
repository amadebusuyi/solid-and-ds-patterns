interface Observer {
  update(subject: Subject): void;
}

export class ConcreteObserver implements Observer {
  constructor(private id: number) {}
  public update(subject: Subject): void {
    console.log(
      `Observer ${this.id} updated, new state: ${subject.getState()}`
    );
  }
}

export class ConcreteMailerObserver implements Observer {
  constructor(private id: number) {}
  public update(subject: Subject): void {
    console.log(
      `Mailer Observer ${this.id} updated, new state: ${subject.getState()}`
    );
  }
}

interface Subject {
  addObserver(observer: Observer): void;
  removeObserver(observer: Observer): void;
  notifyObservers(): void;
  getState(): number;
  setState(state: number): void;
}

export class ConcreteSubject implements Subject {
  private observers: Observer[] = [];
  private state: number = 0;

  public addObserver(observer: Observer): void {
    const isExists = this.observers.includes(observer);
    if (isExists) {
      return console.log("Observer already exists");
    }

    this.observers.push(observer);
    console.log("Observer Added Successfully");
  }

  public removeObserver(observer: Observer): void {
    const observerIndex = this.observers.indexOf(observer);
    if (observerIndex === -1) {
      return console.log("Observer Does not Exist");
    }
    this.observers.splice(observerIndex, 1);
    console.log("Observer was successfully removed");
  }

  public notifyObservers(): void {
    this.observers.forEach((observer) => observer.update(this));
  }

  public getState(): number {
    return this.state;
  }

  public setState(state: number): void {
    this.state = state;
    console.log("Setting State ....");
    this.notifyObservers();
  }
}

// Subject Interface - defines methods to attach/detach observers and notify them
// ConcreteSubject - maintains state and notifies observers of any changes
// Observer Interface - defines the update() method to receive updates
// ConcreteObserverA - reacts to changes in the subject
// ConcreteObserverB - reacts differently to changes in the subject
// Client - sets up subject and observers, and triggers state changes

/**
*****Observer Pattern Components******
 * 1. Subject Interface - register, remove, and notify observers
 * 2. ConcreteSubject - stores state and calls notify() when it changes
 * 3. Observer Interface - defines update() to react to subject changes
 * 4. ConcreteObserver - listens and responds to updates
 * 6. Client - wires everything together
**/

/**
*****Use Cases******
 * 1. Event handling systems (e.g., UI event listeners)
 * 2. Real-time data updates (e.g., stock tickers, dashboards)
 * 3. Pub/Sub messaging systems
 * 4. Chat apps or notification systems
 * 5. Implementing reactive programming models/
**/