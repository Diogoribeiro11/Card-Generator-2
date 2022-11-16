/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/4geeks.ico";

//Random with Refresh
window.onload = function() {
  //write your code here
  var randomSuite = Math.floor(Math.random() * 4) + 1;
  var randomNumber = Math.floor(Math.random() * 13) + 1;

  const suite = document.getElementById("suite");
  const number = document.getElementById("number");
  const suiteRight = document.getElementById("suiteRight");
  const tinyNumber = document.getElementById("tinyNumber");
  const tinyNumberRight = document.getElementById("tinyNumberRight");

  number.classList.add("number");
  tinyNumber.classList.add("tinyNumber");
  tinyNumberRight.classList.add("tinyNumberRight");

  if (randomNumber == 1) {
    randomNumber = "A";
  } else if (randomNumber == 11) {
    randomNumber = "J";
  } else if (randomNumber == 12) {
    randomNumber = "Q";
  } else if (randomNumber == 13) {
    randomNumber = "K";
  }

  number.textContent = randomNumber;
  tinyNumber.textContent = randomNumber;
  tinyNumberRight.textContent = randomNumber;

  if (randomSuite == 1) {
    suite.classList.add("spade");
    suiteRight.classList.add("spadeRight");

    suite.textContent = "♠";
    suiteRight.textContent = "♠";
  } else if (randomSuite == 2) {
    suite.classList.add("club");
    suiteRight.classList.add("clubRight");

    suite.textContent = "♣";
    suiteRight.textContent = "♣";
  } else if (randomSuite == 3) {
    suite.classList.add("heart");
    suiteRight.classList.add("heartRight");

    number.classList.add("redNumber");
    tinyNumber.classList.add("redNumber");
    tinyNumberRight.classList.add("redNumber");

    suite.textContent = "♥";
    suiteRight.textContent = "♥";
  } else if (randomSuite == 4) {
    suite.classList.add("diamond");
    suiteRight.classList.add("diamondRight");

    number.classList.add("redNumber");
    tinyNumber.classList.add("redNumber");
    tinyNumberRight.classList.add("redNumber");

    suite.textContent = "♦";
    suiteRight.textContent = "♦";
  }
};

//Random with a button
const button = document.getElementById("button");
button.addEventListener("click", () => {
  var randomSuite = Math.floor(Math.random() * 4) + 1;
  var randomNumber = Math.floor(Math.random() * 13) + 1;

  const suite = document.getElementById("suite");
  const number = document.getElementById("number");
  const suiteRight = document.getElementById("suiteRight");
  const tinyNumber = document.getElementById("tinyNumber");
  const tinyNumberRight = document.getElementById("tinyNumberRight");

  number.classList.add("number");
  tinyNumber.classList.add("tinyNumber");
  tinyNumberRight.classList.add("tinyNumberRight");

  if (randomNumber == 1) {
    randomNumber = "A";
  } else if (randomNumber == 11) {
    randomNumber = "J";
  } else if (randomNumber == 12) {
    randomNumber = "Q";
  } else if (randomNumber == 13) {
    randomNumber = "K";
  }

  number.textContent = randomNumber;
  tinyNumber.textContent = randomNumber;
  tinyNumberRight.textContent = randomNumber;

  if (randomSuite == 1) {
    suite.classList.add("spade");
    suiteRight.classList.add("spadeRight");

    suite.textContent = "♠";
    suiteRight.textContent = "♠";
  } else if (randomSuite == 2) {
    suite.classList.add("club");
    suiteRight.classList.add("clubRight");

    suite.textContent = "♣";
    suiteRight.textContent = "♣";
  } else if (randomSuite == 3) {
    suite.classList.add("heart");
    suiteRight.classList.add("heartRight");

    number.classList.add("redNumber");
    tinyNumber.classList.add("redNumber");
    tinyNumberRight.classList.add("redNumber");

    suite.textContent = "♥";
    suiteRight.textContent = "♥";
  } else if (randomSuite == 4) {
    suite.classList.add("diamond");
    suiteRight.classList.add("diamondRight");

    number.classList.add("redNumber");
    tinyNumber.classList.add("redNumber");
    tinyNumberRight.classList.add("redNumber");

    suite.textContent = "♦";
    suiteRight.textContent = "♦";
  }
});

//Every 10 seconds
setInterval(window.onload, 10000);

//Dynamic size

//style="height: 220px; width: 170px;"
let addForm = document.forms.namedItem("add-card");
addForm.addEventListener("submit", function(e) {
  e.preventDefault();

  const card = document.getElementById("card");
  const width = document.getElementById("width");
  const height = document.getElementById("height");

  // create elements
  var valueWidth = document.getElementById("add-card").elements[0].value;
  var valueheight = document.getElementById("add-card").elements[2].value;

  card.style.width = valueWidth + "px";
  card.style.height = valueheight + "px";
});

