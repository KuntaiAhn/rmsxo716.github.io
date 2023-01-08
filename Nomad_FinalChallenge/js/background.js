
const backGround = [
  "kidsBackground01.jpg",
  "kidsBackground02.webp",
  "kidsBackground03.jpg",
  "kidsBackground04.png",
  "kidsBackground05.png",
  "kidsBackground06.jpg",
  "kidsBackground07.png"
];

const images = backGround[Math.floor(Math.random() * backGround.length)];
const bgImage = document.createElement("img");


document.body.appendChild(bgImage);
document.body.style.background = `url(img/${images})`;
document.body.style.backgroundSize = "100%";
