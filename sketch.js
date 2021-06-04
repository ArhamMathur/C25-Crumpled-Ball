const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;


var engine;
var paper;
var dustbin1,dustbin2,dustbin3;
var ground;


function setup()
{
	createCanvas(1350, 650);
  engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

  dustbin1 = new Dustbin(1000,470,250,20);
  dustbin2 = new Dustbin(870,400,20,163);
  dustbin3 = new Dustbin(1130,400,20,163);
  ground = new Ground(400,600,1900,15);
  paper = new Paper(60,520,15,15,70);
}


function draw()
{
    rectMode(CENTER);
    imageMode(CENTER);
    background(0,0,0);
  
    dustbin1.display();
    dustbin2.display();
    dustbin3.display();
    ground.display();
    paper.display();

}


function keyPressed()
{
    if(keyCode=== UP_ARROW)
    {
      Matter.Body.applyForce(paper.body,paper.body.position,{x:45,y:-45});
    }
  
}