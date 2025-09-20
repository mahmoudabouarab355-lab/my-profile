// Typing animation for name (without blinking cursor)
const nameElement = document.getElementById("animated-name");
const nameText = "Mahmoud Abouarab";
let i = 0;

function typeWriter() {
  if (i < nameText.length) {
    nameElement.innerHTML += nameText.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
typeWriter();

// Dark bubbles background effect
const canvas = document.createElement("canvas");
document.body.appendChild(canvas);
const ctx = canvas.getContext("2d");

canvas.style.position = "fixed";
canvas.style.top = "0";
canvas.style.left = "0";
canvas.style.zIndex = "-1";
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let bubbles = [];
for (let j = 0; j < 40; j++) {
  bubbles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 6 + 4,
    d: Math.random() * 2,
  });
}

function drawBubbles() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(255, 255, 255, 0.15)";
  ctx.beginPath();
  for (let k = 0; k < bubbles.length; k++) {
    let b = bubbles[k];
    ctx.moveTo(b.x, b.y);
    ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2, true);
  }
  ctx.fill();
  moveBubbles();
}

function moveBubbles() {
  for (let k = 0; k < bubbles.length; k++) {
    let b = bubbles[k];
    b.y -= b.d;
    if (b.y < 0) {
      b.y = canvas.height;
      b.x = Math.random() * canvas.width;
    }
  }
}

setInterval(drawBubbles, 50);
