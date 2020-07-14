class bird{
  constructor(){
    this.xpos = 100;
    this.ypos = 250;
    this.gravity = 1.5;
  }

  update(){
    this.ypos += gravity;
    if(gravity < 5){
      gravity += 0.3;
    }
 }
}

class pipeU{
  constructor(offscr){
    this.begin = 650;
    this.xpos = offscr;
    this.ypos = random(-150,0);
    this.speed = 5;
  }

  update(){
    this.xpos -= this.speed;
    if (this.xpos <= 138 && this.xpos >= 77 && mybird.ypos <= this.ypos+260){
      this.speed = 0;
      gravity = 0;
      p1u.speed = 0;
      p2u.speed = 0;
      p1d.speed = 0;
      p2d.speed = 0;
      p3d.speed = 0;
      p3u.speed = 0;
      textSize(70);
      fill(255, 105, 97);
      text('GAME OVER', 100, 250);
      button = createButton('Restart');
      button.position(500,100);
      button.mousePressed(reset);
    }
    if (this.xpos< -36){
      this.xpos = this.begin;
      this.ypos = random(-200,-100);
    }
    
    if (p1d.ypos - (p1u.ypos +260) < 120){
      p1d.ypos = 370;
    }
    if (p2d.ypos - (p2u.ypos +260) < 120){
      p2d.ypos = 370;
    }
    if (p3d.ypos - (p3u.ypos +260) < 120){
      p3d.ypos = 370;
    }
 }
}

class pipeD{
  constructor(offscr){
    this.begin = 650;
    this.xpos = offscr;
    this.ypos = random(270,400);
    this.speed = 5;
  }

  update(){
    this.xpos -= this.speed;
    if (this.xpos <= 138 && this.xpos >= 77 && mybird.ypos+38 >= this.ypos)     {
      this.speed = 0;
      gravity = 0;
      p1u.speed = 0;
      p2u.speed = 0;
      p1d.speed = 0;
      p2d.speed = 0;
      p3u.speed = 0;
      p3d.speed = 0;
      textSize(70);
      fill(255, 105, 97);
      text('GAME OVER', 100, 250);
      button = createButton('Restart');
      button.position(500,100);
      button.mousePressed(reset);
        
    }
    if (this.xpos<-36){
      this.xpos = this.begin;
      this.ypos = random(300,400);
    }
    
    if (this.xpos == 30){
      score += 1;
    }
    
    if (score == 20){
      p1u.speed = 10;
      p2u.speed = 10;
      p1d.speed = 10;
      p2d.speed = 10;
      p3u.speed = 10;
      p3d.speed = 10;
    }
    if (score == 100){
      p1u.speed = 20;
      p2u.speed = 20;
      p1d.speed = 20;
      p2d.speed = 20;
      p3u.speed = 20;
      p3d.speed = 20;
    }
    
    textSize(40);
    text(score, 10, 40);
    fill(0, 102, 153);  
 }
}

var gravity = 3;
var score = 0;

function flap(){
  gravity = -6;
}

let birdimg;
let ground;
let button;

function mouseClicked() {
  flap();
}

function setup() {
  createCanvas(600, 500);
  
  mybird = new bird();
  birdimg = loadImage('b.png');
  ground = loadImage('bg1.png');  
  
  p1u = new pipeU(650);
  p1d = new pipeD(650);
  p2u = new pipeU(950);
  p2d = new pipeD(950);
  p3u = new pipeU(1250);
  p3d = new pipeD(1250);
  pdimg = loadImage('p2.png');
  puimg = loadImage('p1.png');
}

function draw() {
  background(0);
  image (ground, 0, 0);
  mybird.update();
  image (birdimg, mybird.xpos,mybird.ypos);
  p1u.update();
  image (puimg , p1u.xpos , p1u.ypos);
  p1d.update();
  image (pdimg , p1d.xpos , p1d.ypos);
  p2u.update();
  image (puimg , p2u.xpos , p2u.ypos);
  p2d.update();
  image (pdimg , p2d.xpos , p2d.ypos);
  p3u.update();
  image (puimg , p3u.xpos , p3u.ypos);
  p3d.update();
  image (pdimg , p3d.xpos , p3d.ypos);
}

function reset(){
  mybird = new bird(); 
  gravity = 3; 
  score = 0;
  birdimg = loadImage('b.png');
  ground = loadImage('bg1.png');
  
  p1u = new pipeU(650);
  p1d = new pipeD(650);
  p2u = new pipeU(950);
  p2d = new pipeD(950);
  p3u = new pipeU(1250);
  p3d = new pipeD(1250);
  pdimg = loadImage('p2.png');
  puimg = loadImage('p1.png');
}


