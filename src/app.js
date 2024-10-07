import "./style.css";
import "bootstrap";
const card = document.querySelector(".card");
const height = document.querySelector("#height");
const width = document.querySelector("#width");
let generateRandomNumber = () => {
  let numbers = [
    "A",
    "K",
    "Q",
    "J",
    "10",
    "9",
    "8",
    "7",
    "6",
    "5",
    "4",
    "3",
    "2"
  ];

  let RandomN = Math.floor(Math.random() * numbers.length);
  return numbers[RandomN];
};
let gerenatecardsuit = () => {
  let cardsuit = ["diamond", "spade", "heart", "club"];
  let randomsuit = Math.floor(Math.random() * cardsuit.length);
  return cardsuit[randomsuit];
};
let updatecardsize = () => {
  let x = width.value ? `${width.value}px` : "";
  card.style.width = x;
  let y = height.value ? `${height.value}px` : "";
  card.style.height = y;
};

window.onload = () => {
  document.querySelector(".card").classList.add(gerenatecardsuit());
  document.querySelector(".card").innerHTML = generateRandomNumber();
  height.addEventListener("input", updatecardsize);
  width.addEventListener("input", updatecardsize);
};
