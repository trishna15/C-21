const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var ground,ball;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world  = engine.world;
  var ground_options = {
    isStatic:true
  }
  ground = Bodies.rectangle(200,390,200,20,ground_options);
  World.add(world,ground);
  //console.log(object.position.x);
 // console.log(object.position.y)
  ball = Bodies.circle(200,100,20);
  World.add(world,ball);
  var ball_options = {
    restitution:1.0
  }
}

function draw() {
  background(0);  
  Engine.update(engine);
  rect (ground.position.x,ground.position.y,400,20);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
  drawSprites();
}