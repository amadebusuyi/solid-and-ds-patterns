interface ICommand {
  execute(): void;
  undo(): void;
}

export class MyFileSystem {
  private commandQueue: ICommand[] = [];

  public addCommand(command: ICommand): void {
    this.commandQueue.push(command);
  }

  public executeCommand(): void {
    if (this.commandQueue.length > 0) {
      let command = this.commandQueue.shift();
      command?.execute();
    }
  }

  public undoCommand(): void {
    if (this.commandQueue.length > 0) {
      let command = this.commandQueue.pop();
      command?.undo();
    }
  }

  public hasCommands(): boolean {
    return this.commandQueue.length > 0;
  }
}

export class CreateFileCommand implements ICommand {
  constructor(private path: string) {}

  public execute(): void {
    console.log(`Creating file at ${this.path}`);
    // logic
  }

  public undo(): void {
    console.log(`Deleting file at ${this.path}`);
  }
}

export class DeleteFileCommand implements ICommand {
  constructor(private path: string) {}

  public execute(): void {
    console.log(`Deleting file at ${this.path}`);
    // logic
  }

  public undo(): void {
    console.log(`Restoring file at ${this.path}`);
  }
}

export class ReadFileCommand implements ICommand {
  constructor(private path: string) {}

  public execute(): void {
    console.log(`Reading file at ${this.path}`);
    // logic
  }

  public undo(): void {
    console.log(`undo operation not available`);
  }
}

export class UpdateFileCommand implements ICommand {
  constructor(
    private path: string,
    private newContent: string,
    private oldContent: string
  ) {}

  public execute(): void {
    console.log(`Updating file ${this.path}, new content: ${this.newContent}`);
  }

  public undo(): void {
    console.log(`Reverting file ${this.path}, old content: ${this.oldContent}`);
  }
}

// Command - interface declaring the execution method
// ConcreteCommandA - encapsulates a request and defines binding between Receiver and action
// ConcreteCommandB - another concrete command with different behavior
// Receiver - the object that performs the actual work
// Sender/Invoker - stores and executes commands
// Client - creates concrete commands and assigns them to the invoker

/**
*****Command Pattern Components******
 * 1. Command - interface defining an execute() method
 * 2. ConcreteCommandA - implements Command, delegates work to a specific Receiver
 * 3. ConcreteCommandB - another Command implementation
 * 4. Receiver - knows how to perform the actual operation
 * 5. Invoker - triggers the command without knowing how it’s executed
 * 6. Client - creates commands, configures the invoker with them
**/

/**
*****Use Cases******
 * 1. Undo/redo systems in applications
 * 2. Task scheduling or job queues
 * 3. GUI buttons or menu actions that trigger encapsulated commands
 * 4. Macro recording and playback
 * 5. Remote controls for devices (mapping buttons to actions dynamically)
**/
