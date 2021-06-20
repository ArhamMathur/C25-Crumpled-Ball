const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;


var engine;
var paper;
var base,leftWall,rightWall,centerD;
var dustbineImage;
var ground;


function setup()
{
	createCanvas(1350, 650);
  engine = Engine.create();
	world = engine.world;
	Engine.run(engine);

  base = new Dustbin(1000,470,200,20);
  leftWall = new Dustbin(890,400,20,163);
  rightWall = new Dustbin(1100,400,20,163);
  ground = new Ground(400,600,200000000000,15);
  paper = new Paper(60,590,35,35,70);
}


function draw()
{
    rectMode(CENTER);
    imageMode(CENTER);
    background("black");
  
    

    base.display();
    leftWall.display();
    rightWall.display();
    ground.display();
    paper.display();

}


function keyPressed()
{
    if(keyCode=== UP_ARROW)
    {
      Matter.Body.applyForce(paper.body,paper.body.position,{x:35,y:-35});
    }

    if(keyCode=== DOWN_ARROW)
    {
      Matter.Body.applyForce(paper.body,paper.body.position,{x:-35,y:-35});
    }
  
}
