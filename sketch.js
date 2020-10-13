
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ground,paperball,dustbin1,dustbin2,dustbin3;

function preload()
{
	
}

function setup() {
   createCanvas(2000, 800);
   engine = Engine.create();
   world = engine.world;
   ground = new Ground(600,350,1200,10);
   paperball = new PaperBall(200,329,34);
   dustbin1 = new Dustbin(1100,245,20,200,);
   dustbin2 = new Dustbin(990,335,200,20);
   dustbin3 = new Dustbin(880,245,20,200);
   //Create the Bodies Here.
   Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paperball.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  drawSprites();
}

function keyPressed(){

	if(keyCode === UP_ARROW){
	  Matter.Body.applyForce(paperball.body,paperball.body.position,{x: 240,y: -240});
	}
 
 }