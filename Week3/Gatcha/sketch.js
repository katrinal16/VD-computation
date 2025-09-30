let body;
let face;
let n;

function preload() {
  body = loadImage('body.png'); 
}

function setup() {
  createCanvas(400, 400);

  // get random face
  n = int(random(1, 5));
  let imgName = n + ".png";  
  face = loadImage(imgName); 

  let button = createButton('❤️');
  button.position(10, 10);

  button.mousePressed(() => {
    n = int(random(1, 5));
    let imgName = n + ".png";
    face = loadImage(imgName);
  });  
}

function draw() {
  if (n === 1) {
    background('#FFE90F');
  } else if (n === 2) {
    background('#c078cfff');
  } else if (n === 3) {
    background('#7efcfcff');
  } else if (n === 4) {
    background('#ff9a76ff');
  }
  
  image(body, 0, 0);
  image(face, 150, 160);
}