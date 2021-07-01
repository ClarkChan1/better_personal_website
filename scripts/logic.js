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
  console.log(lampHead);
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
  console.log("in function playMusic");
}

function lightUpSpeaker(speaker) {
  console.log("in function lightUpSpeaker");

}

// function to make speakers light up and play music on mouseover
function addListenerSpeakers() {
  let speakers = document.querySelectorAll('.speaker');
  console.log(speakers);
  for (let a = 0; a < speakers.length; a++) {
    speakers[a].addEventListener('mouseover', playMusic);
    speakers[a].addEventListener('mouseover', lightUpSpeaker);
  }
}

// calling all the logic
addListenerComputer();
addListenerLamp();
addListenerSpeakers();
