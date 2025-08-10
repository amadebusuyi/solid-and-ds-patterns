import { CreateFileCommand, DeleteFileCommand, MyFileSystem, ReadFileCommand, UpdateFileCommand } from "../../command-pattern/FileSystem.ts";
import { Light, SimpleRemoteControl, TurnOffCommand, TurnOnCommand } from "../../command-pattern/Remote.ts";

export const triggerRemote = () => {

    const remote: SimpleRemoteControl = new SimpleRemoteControl();
    const light: Light = new Light();

    // Turning On The Light
    remote.setCommand(new TurnOnCommand(light));
    remote.buttonWasPressed();

    // Turning Off the Light
    remote.setCommand(new TurnOffCommand(light));
    remote.buttonWasPressed();

    // Undo last operation
    remote.undoButtonWasPressed();

    // Create a command que
    remote.setCommand(new TurnOnCommand(light));
    remote.setCommand(new TurnOffCommand(light));

    while (remote.hasCommands()) {
    remote.buttonWasPressed();
    }
}

export const triggerFileSystem = () => {
    let myFileSystem = new MyFileSystem();

    // creating a file
    myFileSystem.addCommand(new CreateFileCommand("/path/file.txt"));

    // Update file
    let updateFile = new UpdateFileCommand(
    "/path/file.txt",
    "new content",
    "old content"
    );
    myFileSystem.addCommand(updateFile);

    // Read file
    myFileSystem.addCommand(new ReadFileCommand("/path/file.txt"));

    // deleting a command
    myFileSystem.addCommand(new DeleteFileCommand("/path/file.txt"));

    while (myFileSystem.hasCommands()) {
    myFileSystem.executeCommand();
    }

    myFileSystem.undoCommand();
}