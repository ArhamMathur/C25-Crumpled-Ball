class Paper  
{
    constructor(x, y,radius,angle) 
    {
        var options = 
        {
        
          'restitution':0.5,
          'friction':0.9,
          'density':0.15
            
        }
        this.body = Bodies.circle(x, y, witdh, height, radius, options);
        this.witdh = witdh;
        this.height = height;
        this.image = loadImage("paper.png");
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
