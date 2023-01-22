let boidRadius = 20;
let foodRadius = 20;
let repelRadius = 25;
let isAlive = new Boolean(false);

let boids = [];
let foods = [];
let repels = [];

let xon;
let other;

let cam;

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight, WEBGL);
  cnv.parent('header-canvas');
  // Create objects
  cam = createCamera();
  for(let b = 0; b < 10; b++){
    boids.push(new Boid());
  }
}

function draw() {
  background(18, 18, 18);
  cam.setPosition(0,0, 2000);
  // noStroke();
  // sphere(50);
  for(let b = boids.length-1; b >= 0; b--){
    boids[b].display();
    boids[b].move();
  }
  // console.log(boids);
}

class Boid {
  constructor(){
    this.MAX_SPEED = 15;

    this.position = createVector(random(0, windowWidth),random(0, windowHeight),random(-100, 100));
    this.velocity = createVector();
    this.target = createVector();
    this.offset = createVector(random(-100,100), random(-100,100));

    this.offsetRotationSpeed = random(-.1,.1);
    this.mass = random(100, 200);
    this.angle = 0;
    this.maxforce = .4;
    this.radius = boidRadius;
  }
  move(){
    this.checkEdges();
    this.separate();
    this.steering();
  }
  display(){
    push();
      translate(this.position.x, this.position.y, this.position.z);
      rotateX(this.angle);
      rotateY(this.angle);
      rotateZ(this.angle);
      rectMode(CENTER);
      noStroke();
      fill(240, 84, 84);
      sphere(this.radius);
    pop();
  }
  separate(){
    // this.desiredSeparation = 22*2;
    // this.sum = createVector();
    // this.count = 0;
    // this.distance = createVector();
    // for(let x = boids.length-1; x >= 0; x--){
      // this.other = boids[x];
      // this.distance.dist(this.position.x, this.other.position.x, this.position.y, this.other.position.y, this.position.z, this.other.position.z);
      // if((d > 0) && (d <= this.desiredSeparation)){
        // this.diff = createVector().sub(this.position, this.other.position);
        // this.diff.normalize();
        // this.diff.div(d);
        // this.sum.add(diff);
        // this.count++;
      // }
    // }
    // if(this.count > 0){
      // this.sum.div(this.count);
      // this.sum.normalize();
      // this.sum.mult(this.MAX_SPEED/.07);
      // this.avoid = createVector();
      // this.avoid.sub(this.sum,this.velocity);
      // this.avoid.limit(this.maxforce);
      // this.avoid.mult(10);
      // this.position.add(this.avoid);
    // }
  }
  steering(){
    this.target.x = mouseX;
    this.target.y = mouseY;
    // this.target.z
    this.vectorToTarget = createVector();
    this.vectorToTarget.sub(this.target, this.position);
    this.vectorToTarget.limit(this.MAX_SPEED);
    this.boidSteerForce = p5.Vector.sub(this.vectorToTarget,this.velocity);
    
    this.boidAcceleration = p5.Vector.mult(this.boidSteerForce, 1/this.mass);
    
    this.velocity.add(this.boidAcceleration);
    this.velocity.limit(this.MAX_SPEED);
    
    this.position.add(this.velocity);
    this.angle = this.velocity.heading();
  }
  checkEdges(){
    if(this.position.x > windowWidth + 265){
      this.position.x = 0;
    }
    else if(this.position.x < 0 - (windowWidth + 265)){
      this.position.x = windowWidth + 265;
    }
    if(this.position.y > windowHeight + 165){
      this.position.y = 0;
    }
    else if(this.position.y < 0 - (windowHeight + 165)){
      this.position.y = windowHeight + 165;
    }
  }
  flock(boidArray){

  }
}