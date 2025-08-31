import { AudioPlayer, MacOsMediaPlayer, VideoPlayer, WindowsMediaPlayer } from "../../bridge/MediaPlayer.ts";

export const triggerMediaPlayers = () => {
    let windowsAudioPlayer = new AudioPlayer(new WindowsMediaPlayer());
    windowsAudioPlayer.playFile();

    let macOSVideoPlayer = new VideoPlayer(new MacOsMediaPlayer());
    macOSVideoPlayer.playFile();
}