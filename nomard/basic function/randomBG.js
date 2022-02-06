const images = ['bg_0.jpg', 'bg_1.jpg', 'bg_2.jpg', 'bg_3.jpg', 'bg_4.jpg', 'bg_5.jpg'];
const todaysBG = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement('img');
bgImage.src = `images/${todaysBG}`;
// console.log(bgImage);

document.body.appendChild(bgImage);
