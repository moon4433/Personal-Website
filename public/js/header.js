let x = 0;
let y = 0;
let z = 0;
let rotate = 0;
let flip = 0;

let boidRadius = 5;
let foodRadius = 5;
let repelRadius = 25;
let isAlive = new Boolean(false);

let boids = [];
let foods = [];
let repels = [];

let xon;
let other;

function setup() {
  let cnv = createCanvas(displayWidth, displayHeight, WEBGL);
  cnv.parent('header-canvas');
  // Create objects
  xon = new Boid();
  other = new Boid();
  boids.push(other);
}

function draw() {
  background(18, 18, 18);
  
  xon.update();
  
}

class Boid {
  constructor(){
    this.MAX_SPEED = 15;

    this.position = createVector(random(0, displayWidth),random(0, displayHeight),random(-100, 100));
    this.velocity = createVector();
    this.target = createVector();
    this.offset = createVector(random(-100,100), random(-100,100));

    this.offsetRotationSpeed = random(-.1,.1);
    this.mass = random(100, 200);
    this.angle;
    this.maxforce = .4;
    this.radius = boidRadius;
  }
  update(){
    this.separate(boids)
    this.steering();
  }
  draw(){
    push();
      translate(this.position.x, this.position.y, this.position.z);
      rotateX(this.angle)
      rotateY(this.angle)
      rotateZ(this.angle)
      rectMode(CENTER);
      noStroke();
      fill(255);
      sphere(this.radius);
    pop();
  }
  separate(others){
    this.desiredSeparation = 22*2;
    this.sum = createVector();
    this.count = 0;
    this.distance = createVector;
    for(let x = others.length; x >= 0; x--){
      this.other = others[x];
      console.log(others[x]);
      this.distance.dist(this.position.x, others[x].position.x, this.position.y, others[x].position.y, this.position.z, others[x].position.z);
    }
  }
  steering(){

  }
  checkEdges(){

  }
  flock(boidArray){

  }
}