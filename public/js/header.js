let boidCount = 250;
let foodCount = 1;

let boidRadius = 10;
let foodRadius = 3;
let repelRadius = 25;

let boids = [];
let foods = [];
let repels = [];

let xon;
let other;

let cam;

let boidColor;

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight, WEBGL);
  cnv.parent('header-canvas');
  pixelDensity(1);
  frameRate(30);
  // Create objects
  cam = createCamera();
  boidColor = createVector(240, 84, 84);
  for(let b = 0; b <= boidCount; b++){
    boids.push(new Boid());
  }
  for(let f = 1; f <= foodCount; f++){
    foods.push(new Food());
  }
}

function draw() {
  background(18, 18, 18);
  cam.setPosition(0,0,2000);
  for(let b = boids.length-1; b >= 0; b--){
    boids[b].move();
    boids[b].display();
  }
  for(let f = foods.length-1; f >= 0; f--){
    if(foods[f].isAlive === true){
      foods[f].move();
      foods[f].display();
    }
    else{
      foods[f].isAlive = true;
      foods[f].location.set(random(0 - (windowWidth + 165), windowWidth + 300), random(0 - (windowHeight + 165), windowHeight + 165),random(-50,50));
      foods[f].acceleration.set(random(-1,1),random(-1,1),random(-1,1));
    }
    for(let b = boids.length-1; b >= 0; b--){
      let tempPosition = p5.Vector.sub(boids[b].position, foods[f].position);
      let distanceFromFoodToBoid = sqrt((tempPosition.x * tempPosition.x) + (tempPosition.y * tempPosition.y) + (tempPosition.z * tempPosition.z));
      if(distanceFromFoodToBoid < boids[b].radius + foods[f].radius){
        foods[f].isAlive = false;
      }
    }
  }

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
    this.maxforce = .8;
    this.radius = boidRadius;
  }
  move(){
    // this.checkEdges();
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
      fill(boidColor.x,boidColor.y,boidColor.z);
      sphere(this.radius);
    pop();
  }
  separate(){
    this.desiredSeparation = (this.radius * 2);
    this.sum = createVector();
    this.count = 0;
    for(let x = boids.length-1; x >= 0; x--){
      this.distance = dist(this.position.x, this.position.y, this.position.z, boids[x].position.x, boids[x].position.y, boids[x].position.z);
      if((this.distance > 0) && (this.distance <= this.desiredSeparation)){
        this.diff = p5.Vector.sub(this.position, boids[x].position);
        this.diff.normalize();
        this.diff.div(this.distance);
        this.sum.add(this.diff);
        this.count++;
      }
    }
    if(this.count > 0){
      this.sum.div(this.count);
      this.sum.normalize();
      this.sum.mult(this.MAX_SPEED/.07);
      this.avoid = p5.Vector.sub(this.sum,this.velocity);
      this.avoid.limit(this.maxforce);
      this.avoid.mult(2);
      this.position.add(this.avoid);
    }
  }
  steering(){

    for(let f = foods.length-1; f >= 0; f--){
      this.target = foods[f].position;
    }

    this.vectorToTarget = p5.Vector.sub(this.target, this.position);
    this.vectorToTarget.limit(this.MAX_SPEED);
    this.boidSteerForce = p5.Vector.sub(this.vectorToTarget,this.velocity);
    
    this.boidAcceleration = p5.Vector.mult(this.boidSteerForce, 1/this.mass);
    
    this.velocity.add(this.boidAcceleration);
    this.velocity.limit(this.MAX_SPEED);
    
    this.position.add(this.velocity);
    this.angle = this.velocity.heading();
  }
  checkEdges(){
    if(this.position.x > windowWidth + 300){
      this.position.x = 0 - (windowWidth + 300);
    }
    else if(this.position.x < 0 - (windowWidth + 300)){
      this.position.x = windowWidth + 300;
    }
    if(this.position.y > windowHeight + 165){
      this.position.y = 0;
    }
    else if(this.position.y < 0 - (windowHeight + 165)){
      this.position.y = windowHeight + 165;
    }
    if(this.position.z >= 500){
      this.position.z = -500;
    }
    else if(this.position.z <= -500){
      this.position.z = 500;
    }
  }
  flock(){

  }
  mouseOver(){
    boidColor.set(48, 71, 94);
  }
  mouseOut(){
    boidColor.set(240, 84, 84);
  }
}

class Food {
  constructor(){
    this.position = createVector();
    this.location = createVector();
    this.velocity = createVector(0,0,0);
    this.acceleration = createVector();
    this.radius = foodRadius;
    this.isAlive = new Boolean(false);
  }
  move(){
    this.checkEdges();
    this.steering();
  }
  display(){
    push();
    noStroke();
    fill(245);
    translate(this.location);
    sphere(this.radius);
    pop();
  }
  steering(){
    this.velocity.add(this.acceleration);
    this.velocity.limit(.9);
    this.location.add(this.velocity);
    
    this.position.set(this.location);
  }
  checkEdges(){
    if(this.location.x >= windowWidth + 300){
      this.location.x = 0 - (windowWidth + 300);
    }
    else if(this.location.x <= 0 - (windowWidth + 300)){
      this.location.x = windowWidth + 300;
    }
    if(this.location.y >= windowHeight + 165){
      this.location.y = 0;
    }
    else if(this.location.y <= 0 - (windowHeight + 165)){
      this.location.y = windowHeight + 165;
    }
    if(this.location.z >= 400){
      this.location.z = -400;
    }
    else if(this.location.z <= -400){
      this.location.z = 400;
    }
  }
}

class Obstacle {
  
}