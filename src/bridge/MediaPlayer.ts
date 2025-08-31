// Implementor
interface MediaPlayerImplementation {
  playAudio(): void;
  playVideo(): void;
}

// Concrete Implementor 1
export class WindowsMediaPlayer implements MediaPlayerImplementation {
  public playAudio(): void {
    console.log("Playing audio on Windows Media Player");
  }

  public playVideo(): void {
    console.log("Playing video on Windows Media Player");
  }
}

// Concrete Implementor 2
export class MacOsMediaPlayer implements MediaPlayerImplementation {
  public playAudio(): void {
    console.log("Playing audio on MacOS Media Player");
  }

  public playVideo(): void {
    console.log("Playing video on MacOS Media Player");
  }
}

// Abstraction
export abstract class MediaPlayerAbstraction {
  constructor(protected implementation: MediaPlayerImplementation) {}

  abstract playFile(): void;
}

// Refined Abstraction 1
export class AudioPlayer extends MediaPlayerAbstraction {
  public playFile(): void {
    this.implementation.playAudio();
  }
}

// Refined Abstraction 2
export class VideoPlayer extends MediaPlayerAbstraction {
  public playFile(): void {
    this.implementation.playVideo();
  }
}

// Implementor - MediaPlayerImplementation
// Concrete Implementor 1 - WindowsMediaPlayer
// Concrete Implementor 2 - MacOsMediaPlayer
// Abstraction - MediaPlayerAbstraction
// Refined Abstractions - AudioPlayer, VideoPlayer
// Client

/**
*****Bridge Pattern Components******
 * 1. Abstraction - high-level control interface (MediaPlayerAbstraction)
 * 2. Refined Abstraction - extends abstraction (AudioPlayer, VideoPlayer)
 * 3. Implementor - low-level interface (MediaPlayerImplementation)
 * 4. Concrete Implementors - actual implementations (WindowsMediaPlayer, MacOsMediaPlayer)
 * 5. Client - uses Abstraction + any Implementor interchangeably
 **/

/**
 *** use cases*****
 * 1. Media Players (audio/video across different OS platforms)
 * 2. Payment Systems (abstract Payment + implementations like Stripe, PayPal, Paystack)
 * 3. Cross-Platform UI (same UI logic + implementations for Windows, MacOS, Linux)
 * 4. Database Drivers (abstraction: query executor + implementations for MySQL, MongoDB, Postgres)
 * 5. Messaging Systems (abstraction: MessageSender + implementations for Email, SMS, Push)
**/
