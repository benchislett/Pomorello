class Sound {
  constructor(sound) {
    this.sound = document.createElement("audio");
    this.sound.src = sound;
  }

  play() {
    this.sound.play();
  }
}

const bell = new Sound("https://raw.githubusercontent.com/benchislett/Pomorello/gh-pages/resources/bell.mp3")

export {
  bell
}

