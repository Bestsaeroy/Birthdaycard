const flowerImg = document.getElementById("flowerImg");
const changeBtn = document.getElementById("changeBtn");

const flowers = [
  "images/1.jpg",
  "images/2.jpg",
  "images/3.jpg",
  "images/4.jpg",
  "images/5.jpg",
  "images/6.jpg",
  "images/7.jpg"
];

let index = 0;

changeBtn.addEventListener("click", () => {
  index = (index + 1) % flowers.length;
  flowerImg.src = flowers[index];
  flowerImg.style.transform = "scale(1.05)";
  setTimeout(() => flowerImg.style.transform = "scale(1)", 300);
});
