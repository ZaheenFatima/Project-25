const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var line1, line2, line3;
var paper1;
var ground;
function preload()
{

}

function setup() {
  createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  
  ground=createSprite(width/2, height, width,10);
  ground.shapeColor=("White");
 
  ground = Bodies.rectangle(width/2, 700, width, 10 , {isStatic:true} );
	 World.add(world, ground);

	 line1 = new line(650,650,150,20);
	 paper1 = new paper(100,650,50);
	Engine.run(engine);
  
}

function draw(){
  background(255);
  Engine.update(engine);

  line1.display();
  paper1.display();
  drawSprites();
}

function keyPressed(){
  if (keyCode === UP_Arrow){
      Matter.Body.applyForce(paper1.body,paper1.body.position);
  }
}


