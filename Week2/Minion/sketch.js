function setup() {
  createCanvas(600, 800);
}

function draw() {
  background('lightgray');
  noStroke();

  //body
  fill("#eede34ff");
  ellipse(300, 400, 200, 250);

  //eyes
  fill("silver");
  circle(260, 360, 85);
  circle(340, 360, 85);

  fill("white")
  circle(260, 360, 50);
  circle(340, 360, 50);

  fill("black")
  circle(260, 360, 25);
  circle(340, 360, 25);

  //pants
  fill("blue");
  rect(200, 450, 200, 80);

  //mouth
  fill("black");
  circle(300, 425, 35);

  //arms
  fill("#eede34ff");
  rect(150, 400, 50, 80);
  rect(400, 400, 50, 80);

  //legs
  fill("blue");
  rect(225, 500, 50, 100);
  rect(325, 500, 50, 100);
}
