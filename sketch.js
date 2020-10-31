const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var block1;

function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  ground = new Ground(400,200,200,20);
  block1 = new block(300,300,40,40);
}

function draw() {
  background(255);  
  ground.display();
  block1.display();
  drawSprites();
}