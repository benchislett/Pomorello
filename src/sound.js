class Sound {
  constructor(sound) {
    this.sound = document.createElement("audio");
    this.sound.src = sound;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "none");
    this.sound.style.display = "none";
    document.body.appendChild(this.sound);
  }

  play() {
    this.sound.play();
  }
}

bell = new Sound("https://raw.githubusercontent.com/benchislett/Pomorello/gh-pages/resources/bell.mp3")

export {
  bell
}

