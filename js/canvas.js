const canvas = document.getElementById("js-canvas");
const colors = document.getElementsByClassName("js-color");
const ctx = canvas.getContext("2d");
const range = document.getElementById("js-range");

canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = "#2c2c2c";
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
    ctx.beginPath();
    ctx.moveTo(x, y);
  } else {
    ctx.lineTo(x, y);
    ctx.stroke();
  }
}
function chageColor(ev) {
  strokeColor = ev.target.style.backgroundColor;
  ctx.strokeStyle = strokeColor;
}
function hendleRangeWidth(ev) {
  const RangeWidth = ev.target.value;
  ctx.lineWidth = RangeWidth;
}

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", onMouseDown);
  canvas.addEventListener("mouseup", onMouseUp);
  canvas.addEventListener("mouseout", onMouseUp);
}
Array.from(colors).forEach(function (color) {
  color.addEventListener("click", chageColor);
});
if (range) {
  range.addEventListener("input", hendleRangeWidth);
}
