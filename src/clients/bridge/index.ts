import { ClientDatabaseService, MongoDBDatabase, PostgreSQLDatabase } from "../../bridge/Database.ts";
import { AudioPlayer, MacOsMediaPlayer, VideoPlayer, WindowsMediaPlayer } from "../../bridge/MediaPlayer.ts";

export const triggerMediaPlayers = () => {
    let windowsAudioPlayer = new AudioPlayer(new WindowsMediaPlayer());
    windowsAudioPlayer.playFile();

    let macOSVideoPlayer = new VideoPlayer(new MacOsMediaPlayer());
    macOSVideoPlayer.playFile();
}

export const triggerDatabaseServices = () => {
    let postgreService = new ClientDatabaseService(new PostgreSQLDatabase());
    postgreService.fetchData("USERS");

    let mongoDbService = new ClientDatabaseService(new MongoDBDatabase());
    mongoDbService.fetchData("USERS");
}