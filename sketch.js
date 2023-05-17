function setup() {
  createCanvas(400, 400);
  background(135, 206, 235); // Color del cielo
}

function draw() {
  translate(width / 2, height); // Centramos la pirámide en la página

  // Dibujamos la pirámide
  fill(210, 105, 30); // Color marrón de la pirámide
  triangle(-50, -100, 50, -100, 0, -200);
}
