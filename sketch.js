var ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
//	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	//World.add(world, ground);
	paperObject=new Paper(10,300,50)
   box1=new Box(420,645,200,20)
   box2=new Box(320,600,20,120)
   box3=new Box(520,600,20,120)
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  box1.display()
  box2.display()
  box3.display()
  paperObject.display()
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){

     Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:85})
	}
}


