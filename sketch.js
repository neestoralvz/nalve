function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);

  stroke(0);
  fill(200);

  // Dibuja la base de la pirámide
  beginShape();
  vertex(50, 300);
  vertex(350, 300);
  vertex(300, 200);
  vertex(100, 200);
  endShape(CLOSE);

  // Dibuja la cara frontal de la pirámide
  beginShape();
  vertex(100, 200);
  vertex(300, 200);
  vertex(200, 100);
  endShape(CLOSE);

  // Dibuja la cara lateral de la pirámide
  beginShape();
  vertex(300, 200);
  vertex(350, 300);
  vertex(200, 100);
  endShape(CLOSE);
}
