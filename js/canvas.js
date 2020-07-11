const canvas = document.getElementById("js-canvas");
const colors = document.getElementsByClassName("js-color");
const ctx = canvas.getContext("2d");
const range = document.getElementById("js-range");
const modeBtn = document.getElementById("js-mode");
const saveBtn = document.getElementById("js-save");
canvas.width = 700;
canvas.height = 700;

ctx.strokeStyle = "#2c2c2c";
ctx.fillStyle = "";
ctx.lineWidth = 2.5;

//
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
//
//
let modeValue = false;

function hendlerMode() {
  if (modeValue) {
    modeValue = false;
    modeBtn.innerText = "Fill";
  } else {
    modeValue = true;
    modeBtn.innerText = "Paint";
  }
}
function onFillng() {
  if (modeValue === true) {
    ctx.fillRect(0, 0, 700, 700);
  }
}

//
//
function chageColor(ev) {
  strokeColor = ev.target.style.backgroundColor;
  ctx.strokeStyle = strokeColor;
  ctx.fillStyle = strokeColor;
}
//
//

function hendleRangeWidth(ev) {
  const RangeWidth = ev.target.value;
  ctx.lineWidth = RangeWidth;
}

//
//

//
//
function onSave(ev) {
  ev.preventDefault();
}
//
//
function hendlerSave(ev) {
  const img = canvas.toDataURL();
  const link = document.createElement("a");
  link.href = img;
  link.download = "My-canvas";
  link.click();
}
//
//

if (canvas) {
  canvas.addEventListener("mousemove", onMouseMove);
  canvas.addEventListener("mousedown", onMouseDown);
  canvas.addEventListener("mouseup", onMouseUp);
  canvas.addEventListener("mouseout", onMouseUp);
  canvas.addEventListener("click", onFillng);
  canvas.addEventListener("contextmenu", onSave);
}
Array.from(colors).forEach(function (color) {
  color.addEventListener("click", chageColor);
});
if (range) {
  range.addEventListener("input", hendleRangeWidth);
}
if (modeBtn) {
  modeBtn.addEventListener("click", hendlerMode);
}
if (saveBtn) {
  saveBtn.addEventListener("click", hendlerSave);
}
