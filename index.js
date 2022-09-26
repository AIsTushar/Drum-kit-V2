"use strict";
const drumKeys = document.querySelectorAll(".drum");
let numberOfDrums = drumKeys.length;
// Function to check button andd music
const buttonCheck = function (buttonInnerHtml) {
  switch (buttonInnerHtml) {
    case "w":
      let tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      break;
    case "a":
      let tom2 = new Audio("sounds/tom-2.mp3");
      tom2.play();
      break;
    case "s":
      let tom3 = new Audio("sounds/tom-3.mp3");
      tom3.play();
      break;
    case "d":
      let tom4 = new Audio("sounds/tom-4.mp3");
      tom4.play();
      break;
    case "j":
      let snare = new Audio("sounds/snare.mp3");
      snare.play();
      break;
    case "k":
      let crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
    case "l":
      let kickBass = new Audio("sounds/kick-bass.mp3");
      kickBass.play();
      break;

    default:
      console.log(buttonInnerHtml);
      break;
  }
};

for (let i = 0; i < numberOfDrums; i++) {
  drumKeys[i].addEventListener("click", function () {
    let buttonInnerHtml = this.textContent;
    buttonCheck(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });
}

window.addEventListener("keydown", function (e) {
  buttonCheck(e.key);
  buttonAnimation(e.key);
});

const buttonAnimation = function (key) {
  let activeButton = document.querySelector("." + key);
  activeButton.classList.add("pressed");
  let delayInMilliseconds = 200; //1 second

  setTimeout(function () {
    //your code to be executed after 1 second
    activeButton.classList.remove("pressed");
  }, delayInMilliseconds);
};
