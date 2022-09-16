const key = document.querySelectorAll("div.key");
const clap = document.getElementById("clap")
const hihat = document.getElementById("hihat")
const kick = document.getElementById("kick")
const openhat = document.getElementById("openhat")
const boom = document.getElementById("boom")
const ride = document.getElementById("ride")
const snare = document.getElementById("snare")
const tom = document.getElementById("tom")
const tink = document.getElementById("tink")

const keyTransformStylesOnPress = `
    transform: scale(1.1);
    outline: solid #ffc600 3px;
    box-shadow: 0 0 1rem #ffc600;
`

const keyTransformStylesOnRelease = `
    transform: scale(1);
    outline: solid black 2px;
`

addEventListener('keydown', e => {
    
  if(e.key === "a"){
    clap.style.cssText = keyTransformStylesOnPress;
    playSound("clap")
    }
  else if(e.key === "s"){
    hihat.style.cssText = keyTransformStylesOnPress;
    playSound("hihat")
    }
  else if(e.key === "d"){
    kick.style.cssText = keyTransformStylesOnPress;
    playSound("kick")
    }
  else if(e.key === "f"){
    openhat.style.cssText = keyTransformStylesOnPress;
    playSound("openhat")
    }
  else if(e.key === "g"){
    boom.style.cssText = keyTransformStylesOnPress;
    playSound("boom")
    }
  else if(e.key === "h"){
    ride.style.cssText = keyTransformStylesOnPress;
    playSound("ride")
    }
  else if(e.key === "j"){
    snare.style.cssText = keyTransformStylesOnPress;
    playSound("snare")
    }
  else if(e.key === "k"){
    tom.style.cssText = keyTransformStylesOnPress;
    playSound("tom")
    }
  else if(e.key === "l"){
    tink.style.cssText = keyTransformStylesOnPress;
    playSound("tink")
    }
});

addEventListener('keyup', e => {
  key.forEach((keyBoardItem) => {
    keyBoardItem.style.cssText = keyTransformStylesOnRelease;
  }); 
});

function playSound(soundToPlay){
var musicPath = `sounds\\${soundToPlay}.wav`;    
var music = new Audio(musicPath);
music.play();
}


