
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(600,height,1200,20);
	mango1 = new Mango(810,350,25);
    mango2 = new Mango(870,400,25);
    mango3 = new Mango(890,300,25);
    mango4 = new Mango(780,450,25);
    mango5 = new Mango(720,420,25);
    mango6 = new Mango(800,420,23);
    mango7 = new Mango(930,430,26);
    mango8 = new Mango(960,260,26);
    mango9 = new Mango(950,350,24);
    mango10 = new Mango(1030,350,25);
    mango11 = new Mango(1100,400,25);
    mango12 = new Mango(1050,320,25);
    tree1 = new Tree(920,465,0,0)
	boy1 = new Boy(435,545,100,100)
	stone1 = new Stone(435,590,20)
    Sling1 = new Slingshot(stone1.body,{x:465,y:600})
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("silver");
  
  ground.display()
  tree1.display();
  boy1.display();
  stone1.display();
   Sling1.display();
   mango1.display()
    mango2.display();
    mango3.display();
    mango4.display();
    mango5.display();
    mango6.display();
    mango7.display();
    mango8.display();
    mango9.display();
    mango10.display();
    mango11.display();
    mango12.display();
    
	 detectCollision(stone1,mango1);
    detectCollision(stone1,mango2);
    detectCollision(stone1,mango3);
    detectCollision(stone1,mango4);
    detectCollision(stone1,mango5);
    detectCollision(stone1,mango6);
    detectCollision(stone1,mango7);
    detectCollision(stone1,mango8);
    detectCollision(stone1,mango9);
    detectCollision(stone1,mango10);
    detectCollision(stone1,mango11);
    detectCollision(stone1,mango12);
  
  drawSprites();
 
}

function mouseDragged()
{
    Matter.Body.setPosition(stone1.body,{x:mouseX,y:mouseY})

}

function mouseReleased()
{
    Sling1.fly();
}

function keyPressed() 
{
 if (keyCode === 32) 
  {
   Matter.Body.setPosition(stone1.body,{x:235,y:590})
   Sling1.attach(stone1.body)
    
  }
}

function detectCollision(lstone,lmango)
{
    mangoBodyPosition = lmango.body.position
    stoneBodyPosition = lstone.body.position

    var distance = dist(stoneBodyPosition.x,stoneBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
    if(distance<=lmango.radius+lstone.radius)
    {
        Matter.Body.setStatic(lmango.body,false)
    }
}

