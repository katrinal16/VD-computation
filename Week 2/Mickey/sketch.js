function setup() {
  createCanvas(600, 800);
  background("lightblue");
  noStroke();
}

function draw() {

  // background(mouseX/2.35);

  // ears
  fill('black');
  circle(300,86,150);
  circle(191,205,150);

  //face
  fill('#F4E2C2');
  circle(341,230,225);

  //eyes
  fill('black');
  circle(350,205,44);
  circle(417,205,44);

  //nose
  circle(468,250,66); 

  //mouth
  fill('red');
  circle(350,315,54);  

  //body
  circle(384,443,194);    

  //buttons
  fill('black');
  circle(445,405,48);
  circle(395,424,48);

  //feet
  fill('yellow');
  circle(169,612,180);
  circle(423,679,180);

  //hands
  fill('#F4E2C2');
  circle(250,400,70);
  circle(525,400,70)
}