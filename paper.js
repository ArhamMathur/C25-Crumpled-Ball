class Paper  
{
    constructor(x, y,radius,options,angle) 
    {
        var options = 
        {
          'isStatic': false,
          'restitution':0.2,
          'friction':0.5,
          'density':1.1,
            
        }
        this.body = Bodies.circle(x,y,width,height,radius);
        this.image = loadAnimation("sprites/paper.png");
        this.radius = radius;
        World.add(world,this.body);
    } 
    display()
    {       
      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      imageMode(CENTER);
      image(this.image,0, 0,this.radius,this.radius);
      pop();
    }
}