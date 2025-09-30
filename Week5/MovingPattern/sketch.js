const GRID = 10;
const CELL = 1080 / GRID;

function setup() {
  createCanvas(1080, 1080);
  noStroke();
  //noLoop();
  frameRate(3);
}

function draw() {
  background(255, 255, 220);
  const cz = random(40, CELL);
  const sz = random(40, CELL);

  for (let gy = 0; gy < GRID; gy++) {
    for (let gx = 0; gx < GRID; gx++) {
      console.log("gy = " + gy);
      const cy = gy * CELL + CELL / 2;
      const cx = gx * CELL + CELL / 2;

      push();
      blendMode(MULTIPLY);
      fill("lightblue");
      circle(cx, cy, cz);
      pop();

      push();
      blendMode(MULTIPLY);
      fill("orange");
      circle(cx + 20, cy + 20, cz - 20);
      pop();

      push();
      blendMode(MULTIPLY);
      fill("orange");
      circle(cx - 20, cy - 20, cz - 20);
      pop();

      push();
      blendMode(MULTIPLY);
      translate(cx, cy);
      fill("#aad1d1ff");
      rectMode(CENTER);
      rect(0, 0, sz, random(sz));
      pop();

      // push();
      // translate(cx, cy); // move origin to canvas center
      // const s = random(5, 20); // side length
      // const h = (sqrt(3) / 2) * s; // height of equilateral triangle
      // fill("yellow");
      // rotate(random(TWO_PI));
      // triangle(-s / 2, h / 3, s / 2, h / 3, 0, (-2 * h) / 3);
      // pop();
    }
  }
}

function keyPressed() {
  if (key === "s") {
    saveGif("mySketch", 5);
  }
}
