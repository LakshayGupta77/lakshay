const myElement = document.getElementById("overlay");
function blurElement() {
  myElement.style.filter = "blur(30px)";
  document.getElementById("header").style.opacity = 0;
}
setTimeout(blurElement, 1500);

setTimeout(reveal, 3500);
function reveal() {
  let text =
    "Hey Khushi, even though we don’t see each other as often as I’d like, I wanted to create something special just for you";
  let index = 0;
  let element = document.getElementById("showtext");

  function typeEffect() {
    if (index < text.length) {
      if (index === 69) {
        element.innerHTML += "<br>";
      }
      if (index === 118) {
        setTimeout(backspaceEffect, 2000);
      }
      element.innerHTML += text[index];
      index++;
      setTimeout(typeEffect, 80);
    }
  }
  typeEffect();
}

let index = 118;
let element = document.getElementById("showtext");
function backspaceEffect() {
  if (index !== -1) {
    element.textContent = element.textContent.substring(0, index);
    index--;
    setTimeout(backspaceEffect, 15);
  }
  if (index === -1) {
    setTimeout(meet, 1500);
    return;
  }
}

function calculateTimeDifference(meetingDate) {
  const currentDate = new Date();

  const meetingDateObj = new Date(meetingDate);

  const timeDifferenceMs = currentDate - meetingDateObj;

  const days = Math.floor(timeDifferenceMs / (1000 * 60 * 60 * 24));
  const months = Math.floor(days / 30);
  const years = Math.floor(months / 12);

  const remainingDays = days % 30;
  const remainingMonths = months % 12;

  return { years, months: remainingMonths, days: remainingDays };
}

const meetingDate = "2022-04-15";
const timeDifference = calculateTimeDifference(meetingDate);

let firstmeet = `It's been ${timeDifference.years} years, ${timeDifference.months} months, and ${timeDifference.days} days since we first met in tuition and I cherish every moment of it`;
let text = firstmeet;
let index1 = 0;
let element1 = document.getElementById("showtext");
function meet() {
  if (index1 < text.length) {
    if (index1 === 75) {
      element1.innerHTML += "<br>";
    }
    if (index1 === 102) {
      setTimeout(demeet, 1500);
    }
    element1.innerHTML += text[index1];
    index1++;
    setTimeout(meet, 80);
  }
}

function demeet() {
  if (index1 !== -1) {
    element1.textContent = element1.textContent.substring(0, index1);
    index1--;
    setTimeout(demeet, 30);
  }
  if (index1 === -1) {
    setTimeout(lyk, 1500);
    return;
  }
}
let text1 = "And i just wanted to let you know that...";
let index2 = 0;

function lyk() {
  if (index2 < text1.length) {
    element.innerHTML += text1[index2];
    index2++;
    setTimeout(lyk, 80);
  } else {
    setTimeout(final, 3000);
  }
}
function final() {
  element.style.opacity = 0;
  myElement.style.filter = "blur(0px)";
  document.getElementById("overlay").style.backgroundColor = "rgba(0, 0, 0, 1)";
  setTimeout(burstLoveEmojisFullscreen, 2000);
}
const fullscreenContainer = document.querySelector(".fullscreen-container");

function burstLoveEmojisFullscreen() {
  const numEmojis = 150;
  const loveEmoji = "❤️";
  setTimeout(function () {
    document.getElementById("end").style.opacity = 1;
  }, 4000);
  for (let i = 0; i < numEmojis; i++) {
    const emoji = document.createElement("span");
    emoji.classList.add("love-emoji");
    emoji.textContent = loveEmoji;

    emoji.style.left = `${Math.random() * 100}%`;
    emoji.style.top = `${Math.random() * 100}%`;
    emoji.style.fontSize = "70px";

    emoji.style.animationName = "moveUpAndFade";
    emoji.style.animationDuration = `6s`;
    emoji.style.animationDelay = "4s";
    emoji.style.animationFillMode = "forwards";

    fullscreenContainer.appendChild(emoji);
  }
}
