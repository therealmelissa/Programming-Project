function setup() {
    createCanvas(680,680)
        background('pink')
}

function draw() {
  // put drawing code here
    
    textSize(56);
    text('nights',455,456,120,120);
    fill(32,60,mouseY);
    noStroke(30, 20, 55, 55);
    
    
    textSize(56);
    text ('with',478,510,120,120)
    fill(150,226,mouseY)
    noStroke(30, 20, 55, 55);
    
     textSize(56);
    text ('you',510,553,120,120)
    fill(221,150,mouseX)
    noStroke(30, 20, 55, 55);
    
        push()
    translate(width / 2.3, height / 2.4);
    rotate(PI / 4.0);
    fill('black');
    rect(-100, mouseY, 30,30)
        pop()
    
       push()
    translate(width / 2.3, height / 2.4);
    rotate(PI / 4.0);
    fill('red');
    noStroke(30, mouseY, 55, 55);
    rect(-30,mouseY, 30,30);
        pop()
    
        push()
    translate(width / 2.3, height / 2.4);
    rotate(PI / 4.0);
    fill('yellow');
    noStroke(30, 20, 55, 55);
    rect(-150, mouseY, 34,34);
        pop()
    
        push()
    translate(width / 2.3, height / 2.4);
    rotate(PI / 4.0);
    fill('purple');
    noStroke(30, 20, 55, 55);
    rect(118,mouseY,30,30);
        pop()
    
    
      push()
    translate(width / 2.3, height / 2.4);
    rotate(PI / 4.0);
    fill('brown');
    noStroke(30, 20, 55, 55);
    rect(189,mouseY,15,15);
        pop()
    
      push()
    translate(width / 2.3, height / 2.4);
    rotate(PI / 4.0);
    fill('blue');
    noStroke(30, 20, 55, 55);
    rect(5,mouseY,44,44);
        pop()
    
    
        
}

function mousePressed() {
    background ('silver')

    
let inconsolata;
function preload() {
  inconsolata = loadFont();

}
    
function setup() {
  createCanvas(400, 400);
  textSize(100)
  fade = 0
}
}