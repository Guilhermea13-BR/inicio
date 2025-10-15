const botaoPlayPause = document.getElementById("play-pause");
const audio = document.getElementById("audio-capitulo");

let taTocando = false;
// console.log(audio)

function tocarFaixa() {
  console.log("Clicou");
  audio.play();
  taTocando = true;
  console.log("Deu play");

  botaoPlayPause.classList.add("tocando");
}

function pausarFaixa() {
  console.log("Clicou");
  audio.pause();
  taTocando = false;
  console.log("Deu pause");

  botaoPlayPause.classList.remove("tocando");
}

function tocarOuPausarFaixa() {
  if (taTocando === true) {
    pausarFaixa();
  } else {
    tocarFaixa();
  }
}

// audio.play()

botaoPlayPause.addEventListener("click", tocarOuPausarFaixa);
