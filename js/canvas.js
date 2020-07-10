const canvas = document.getElementById("js-canvas");
const color = document.getElementsByClassName("js-color");
const ctx = canvas.getContext("2d");
canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = "bule";
ctx.lineWidth = 2.5;

let mouseValue = false;

function onMouseDown() {
  mouseValue = true;
}
function onMouseUp() {
  mouseValue = false;
}
function onMouseMove(ev) {
  const x = ev.offsetX;
  const y = ev.offsetY;
  if (!mouseValue) {
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}
function changeColor(ev) {
  console.log(ev.target.style);
}
if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", onMouseDown);
  canvas.addEventListener("mouseup", onMouseUp);
  canvas.addEventListener("mouseout", onMouseUp);
}
