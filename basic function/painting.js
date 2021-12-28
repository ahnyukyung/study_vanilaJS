const canvas = document.getElementById("jaCanvas");
let painting = false;

function stopPainting(event) {
  painting = false;
}
function onMouseOver(event) {
  const x = event.offsetX;
  const y = event.offsetY;
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
  canvas.addEventListener("mousedown", onMouseDown);
  canvas.addEventListener("mouseup", onMouseUP);
  canvas.addEventListener("mouseleave", stopPainting);
}
