// global constants
const cluePauseTime = 333; //how long to pause in between clues
const nextClueWaitTime = 1000; //how long to wait before starting playback of the clue sequence
const numButtons = 8;
const patternLength = 8;
const totalGuesses = 3;
const imgIdStub = "image";

//Global Variables\
var pattern = [5, 7, 4, 3, 2, 6, 1, 8];
var progress = 0;
var gamePlaying = false;
var tonePlaying = false;
var volume = 0.5;
var guessCounter = 0;
var guessesLeft = totalGuesses;

var currImgId = "img";
var clueHoldTime = 1000; //how long to hold each clue's light/sound

function startGame() {
  //initialize game variables
  progress = 0;
  gamePlaying = true;
  clueHoldTime = 1000;
  guessesLeft = totalGuesses;

  //initialize pattern
  for (let i = 0; i < patternLength; i++) {
    pattern[i] = Math.floor(Math.random() * numButtons) + 1;
  }

  // swap the Start and Stop buttons
  document.getElementById("startBtn").classList.add("hidden");
  document.getElementById("stopBtn").classList.remove("hidden");

  document.getElementById("guessesCounter").classList.remove("hidden");
  document.getElementById("guessesNumber").innerHTML = guessesLeft;
  document.getElementById("instructions").classList.add("hidden");

  playClueSequence();
}

function stopGame() {
  gamePlaying = false;
  document.getElementById("stopBtn").classList.add("hidden");
  document.getElementById("startBtn").classList.remove("hidden");
  document.getElementById("guessesCounter").classList.add("hidden");
  document.getElementById("instructions").classList.remove("hidden");
}

function lightButton(btn) {
  document.getElementById("button" + btn).classList.add("lit");
}
function clearButton(btn) {
  document.getElementById("button" + btn).classList.remove("lit");
}

function playSingleClue(btn) {
  if (gamePlaying) {
    lightButton(btn);
    playTone(btn, clueHoldTime);
    setTimeout(clearButton, clueHoldTime, btn);
  }
}

function playClueSequence() {
  guessCounter = 0;
  let delay = nextClueWaitTime; //set delay to initial wait time
  for (let i = 0; i <= progress; i++) {
    // for each clue that is revealed so far
    console.log("play single clue: " + pattern[i] + " in " + delay + "ms");
    setTimeout(playSingleClue, delay, pattern[i]); // set a timeout to play that clue
    delay += clueHoldTime;
    delay += cluePauseTime;
  }
  clueHoldTime -= 100;
}

function loseGame() {
  stopGame();
  alert("Game Over. You lost. Womp womp.");
}

function winGame() {
  stopGame();
  alert("Game Over. You won! Woohoo!");
}

function guess(btn) {
  console.log("user guessed: " + btn);
  if (!gamePlaying) {
    return;
  }

  // add game logic here
  if (btn == pattern[guessCounter]) {
    guessCounter++;
    if (guessCounter > progress) {
      guessCounter = 0;
      progress++;
      if (progress >= pattern.length) {
        winGame();
      }
      playClueSequence();
    }
  } else {
    guessesLeft--;
    document.getElementById("guessesNumber").innerHTML = guessesLeft;
    if (guessesLeft <= 0) {
      loseGame();
    } else playClueSequence();
  }
}

function playAudio(source) {
  document.getElementById("audio" + source).play();

  currImgId = imgIdStub + source;

  // display image at the bottom
  document.getElementById(currImgId).classList.remove("hidden");
}

// Sound Synthesis Functions
const freqMap = {
  1: 261.6, // C4
  2: 293.7, // D4
  3: 329.6, // E4
  4: 349.2, // F4
  5: 392, // G4
  6: 440, // A4
  7: 493.88, // B4
  8: 523.25 // C5
};
function playTone(btn, len) {
  o.frequency.value = freqMap[btn];
  g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
  tonePlaying = true;
  setTimeout(function() {
    stopTone();
  }, len);
}
function startTone(btn) {
  if (!tonePlaying) {
    o.frequency.value = freqMap[btn];
    g.gain.setTargetAtTime(volume, context.currentTime + 0.05, 0.025);
    tonePlaying = true;
  }
  currImgId = imgIdStub + btn;

  // display image at the bottom
  document.getElementById(currImgId).classList.remove("hidden");
}
function stopTone() {
  g.gain.setTargetAtTime(0, context.currentTime + 0.05, 0.025);
  tonePlaying = false;

  // remove image at the bottom
  document.getElementById(currImgId).classList.add("hidden");
}

//Page Initialization
// Init Sound Synthesizer
var context = new AudioContext();
var o = context.createOscillator();
var g = context.createGain();
g.connect(context.destination);
g.gain.setValueAtTime(0, context.currentTime);
o.connect(g);
o.start(0);
