function showPleaseStandby(computerScreen) {
  computerScreen.src = "gifs/please-stand-by.gif";
}

function showCode(computerScreen) {
  computerScreen.src = "gifs/code.gif";
}

// this is for when the user hovers over the computer screen, it will show the fallout please standby gif
function addListenerComputer() {
  let computerScreen = document.querySelector('.computer-screen');
  computerScreen.addEventListener('mouseover', function() {
    showPleaseStandby(computerScreen);
  });
  computerScreen.addEventListener('mouseout', function() {
    showCode(computerScreen);
  });
}

function lightUpLamp(lamp) {
  let light = document.createElement('div');
  light.classList.add('light');
  lamp.appendChild(light);
}

function removeLightLamp(lamp) {
  lamp.removeChild(lamp.querySelector('.light'));
}

// function to add the light only when lamp is hovered over so it doesn't cover the speakers and you can hover over the speakers as well
function addListenerLamp() {
  let lamp = document.querySelector('.lamp');
  let lampHead = document.querySelector('.lamp .head');
  // for when user mouses over
  lampHead.addEventListener('mouseover', function() {
    lightUpLamp(lamp);
  });
  // remove the light div when user stops hovering
  lampHead.addEventListener('mouseout', function() {
    removeLightLamp(lamp);
  });
}

function playMusic(speaker) {
  let song = document.querySelector(".BP-Song");
  song.play();
}

function lightUpSpeaker(speaker) {}

// function to make speakers light up and play music on mouseover
function addListenerSpeakers() {
  let speakers = document.querySelectorAll('.speaker');
  console.log(speakers);
  for (let a = 0; a < speakers.length; a++) {
    speakers[a].addEventListener('mouseover', playMusic);
    speakers[a].addEventListener('mouseover', lightUpSpeaker);
  }
}

function moveDiglett(e){
  console.log("in moveDiglett");
  this.classList.add('fade-out-diglett');
  let diglett = this;
  
  // make diglett reappear after 3 seconds
  setTimeout(function(){
    // move diglett to a random location horizontally
    let min = 0;
    let max = 860;
    diglett.style.left = Math.floor(Math.random() * (max - min + 1) + min) + 'px';
    diglett.classList.remove('fade-out-diglett');
  }, 3000);
}

function addListenerDiglett(){
  let diglett = document.querySelector('.diglett');
  diglett.addEventListener('mouseenter', moveDiglett);
}

// calling all the logic
addListenerComputer();
addListenerLamp();
// addListenerSpeakers();
addListenerDiglett();
