interface MediaPlayerImplementation {
  playAudio(): void;
  playVideo(): void;
}

export class WindowsMediaPlayer implements MediaPlayerImplementation {
  public playAudio(): void {
    console.log("Playing audio on windows media player");
  }

  public playVideo(): void {
    console.log("Playing video on windows media player");
  }
}

export class MacOsMediaPlayer implements MediaPlayerImplementation {
  public playAudio(): void {
    console.log("Playing audio on MacOS media player");
  }

  public playVideo(): void {
    console.log("Playing video on MacOS media player");
  }
}

export abstract class MediaPlayerAbstraction {
  constructor(protected implementation: MediaPlayerImplementation) {}

  abstract playFile(): void;
}

export class AudioPlayer extends MediaPlayerAbstraction {
  public playFile(): void {
    this.implementation.playAudio();
  }
}

export class VideoPlayer extends MediaPlayerAbstraction {
  public playFile(): void {
    this.implementation.playVideo();
  }
}