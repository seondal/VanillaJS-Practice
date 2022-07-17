const images = ["1.jpg", "2.webp", "3.webp", "4.webp", "5.webp"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

console.log(chosenImage);

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;

document.body.appendChild(bgImage);
