const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg"];
const Btn = document.querySelector("#change-bg");
const body = document.querySelector("body");

function onClickChangeBG() {
  const chosenImage = images[Math.floor(Math.random() * images.length)];
  body.style.backgroundImage = `url("img/${chosenImage}")`;
  body.style.backgroundSize = "cover";
}

Btn.addEventListener("click", onClickChangeBG);