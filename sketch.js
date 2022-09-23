let zBereich;

function setup() {
  zBereich = createCanvas(windowWidth, windowHeight);
  zBereich.position(0,0); // anfang canvas links oben
  zBereich.style('z-index','-1'); // verschieben auf z achse
}

function draw() {
  // ohne background transparent
  // background(123, 112, 204);
  noStroke;
  if (mouseX > windowWidth/2 && mouseY > windowHeight/2){
    fill(123, 112, 204, 50);
  }
  if (mouseX > windowWidth/2 && mouseY < windowHeight/2){
    fill(204, 112, 146, 50);
  }
  if (mouseX < windowWidth/2 && mouseY < windowHeight/2){
    fill(204, 183, 112, 50);
  }
  if (mouseX < windowWidth/2 && mouseY > windowHeight/2){
    fill(112, 204, 132, 50);
  }
  circle(mouseX, mouseY, 20);
}
