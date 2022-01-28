//vacuum
//box
//sphere
let img;
function preload() {
  // img = loadImage("earth.png");
  img = loadImage("bl.jpg");
  //  img = loadImage("egg.jpg");
}
function setup() {
  createCanvas(550, 550, WEBGL);
  noCursor();
}

function draw() {
  // background(0);
  orbitControl();
  rotateX(frameCount * 0.02);
  rotateY(frameCount * 0.04);
  // rotateZ(frameCount * 0.01);
  noStroke();

  //fill(0, 0, 0, 75);
  texture(img);
  //box(400, mouseX);
  //  box(500);
  // torus(250,50);
  // box(650, 5, 10, 1);
  // sphere(600);
  // box(random(0,400));
  // noRotate()
}
