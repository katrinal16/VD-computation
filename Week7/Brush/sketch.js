let brushImg1, brushImg2, brushImg;
let currentBrush = 1; // 1 or 2

function preload() {
  brushImg1 = loadImage('Tofu.png');
  brushImg2 = loadImage('Tofu2.png');
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  imageMode(CENTER); // so the brush centers under the cursor
  brushImg = brushImg1; // start with the first brush
}

function draw() {
  if (mouseIsPressed) {
    image(brushImg, mouseX, mouseY, 100, 150); // adjust the width and height to the proper aspect ratio
  }
}

function mousePressed() {
  // swap brush each time the mouse is pressed
  if (currentBrush === 1) {
    currentBrush = 2;
    brushImg = brushImg2;
  } else {
    currentBrush = 1;
    brushImg = brushImg1;
  }
}

function keyPressed() {
  if (key === 's') {
    save('myCanvas.png');
  }
}