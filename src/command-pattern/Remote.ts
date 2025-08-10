/**
 * Command Pattern Implementation:
 * - Encapsulates a request (light actions) as an object, allowing parameterization of invokers and support for undo operations.
 * - ICommand: command interface declaring execute() and undo().
 * - Light: receiver that knows how to perform the actual actions.
 * - TurnOnCommand & TurnOffCommand: concrete commands binding Light actions to ICommand interface.
 * - SimpleRemoteControl: invoker that stores commands, executes them, and can trigger undo.
 * - Client can configure the invoker with different commands without changing invoker logic.
 */

// Command - declares execute & undo
interface ICommand {
  execute(): void;
  undo(): void;
}

// Receiver - knows how to perform actions
export class Light {
  public turnOn(): void {
    console.log("The Light is on");
  }

  public turnOff(): void {
    console.log("The Light is off");
  }
}

// Concrete Command - turns light on
export class TurnOnCommand implements ICommand {
  constructor(private light: Light) {}

  public execute(): void {
    this.light.turnOn();
  }

  public undo(): void {
    this.light.turnOff();
  }
}

// Concrete Command - turns light off
export class TurnOffCommand implements ICommand {
  constructor(private light: Light) {}

  public execute(): void {
    this.light.turnOff();
  }

  public undo(): void {
    this.light.turnOn();
  }
}

// Invoker - stores & triggers commands
export class SimpleRemoteControl {
  private currentCommand!: ICommand;
  private undoCommand!: ICommand;
  private commandQueue: ICommand[] = [];

  public setCommand(command: ICommand): void {
    this.undoCommand = this.currentCommand;
    this.currentCommand = command;
    this.commandQueue.push(command);
  }

  public buttonWasPressed(): void {
    if (this.commandQueue.length) {
      const command = this.commandQueue.shift();
      command?.execute();
    }
  }

  public undoButtonWasPressed(): void {
    this.undoCommand.execute();
  }

  public hasCommands(): boolean {
    return this.commandQueue.length > 0;
  }
}
