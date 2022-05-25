const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var bg, snowball;
var snowImg;
var snow = [];


function preload() {
  bg = loadImage("snow2.jpg");
  
}


function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;

}

function draw() {
  background(bg);  
  Engine.update(engine)
  snowdrop();
  for(var i =0; i<snow.length; i++) {
    snow[i].display()
  }
  
  drawSprites();
}

function snowdrop() {
  if (frameCount %5 === 0) {
    snowball = new Snowfall()
    snow.push(snowball);

    

  }
}