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

const bell = new Sound("resources/bell.mp3")

export {
  bell
}

