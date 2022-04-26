let startY = -100;

let a = startY;

let noiseScale = 0.01;


function setup() {
  createCanvas(windowWidth, windowHeight);
  
  
  background(0);
  
  
  
}

function draw() {
  
  
  
  noStroke()
  rect(width/2,random(height),30)

  
  for (let x = 0; x < width; x += 1) {
    let noiseVal = noise((a + x) * noiseScale, a * noiseScale);
    stroke(noiseVal*255);
    strokeWeight(10);
    line(x, a + noiseVal * 80, x, height);
  }

  a += 6;
}
