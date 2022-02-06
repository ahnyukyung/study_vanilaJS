const canvas = document.getElementById("jsCanvas");
let painting = false;
const ctx = canvas.getContext("2d");

ctx.strokeStyle = "#2c2c2c";
ctx.lineWidth = 2.5;

function startPainting() {
  painting = true;
}

function stopPainting(event) {
  painting = false;
}
function onMouseOver(event) {
  const x = event.offsetX;
  const y = event.offsetY;
  if (!painting) {
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}
function onMouseDown(event) {
  console.log(event);
  painting = true;
}
function onMouseUP(event) {
  stopPainting();
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseOver);
  canvas.addEventListener("mousedown", startPainting);
  canvas.addEventListener("mouseup", stopPainting);
  canvas.addEventListener("mouseleave", stopPainting);
}
