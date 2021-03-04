
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;


var options={
isStatic:false,
restitution:0.3,
friction:0.5,
density:1.2
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);
	dustbinObj.addImage("dustbingreen.png")
	paperObj=new paper(1200,100);
	paperObj.addImage("paper.png")
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(230);
 
 if(keydown(up)){
paperObjVelocityX=4
 }

  groundObject.display();
  dustbinObj.display();
  paperObject.display();
}

