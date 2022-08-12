document.addEventListener("mousemove", coordinates);

const result = document.querySelector(".screenLog");
const mouse = document.querySelector(".pointer");
const lineX = document.querySelector(".vertical");
const lineY = document.querySelector(".horizontal");

function coordinates(e) {
  const X = e.clientX;
  const Y = e.clientY;
  result.innerText = `X: ${X} Y: ${Y}`;

  mouse.style.left = X + "px";
  mouse.style.top = Y + "px";
  lineX.style.left = `${X}px`;
  lineY.style.top = `${Y}px`;
}
