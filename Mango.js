class Mango  {
 
     constructor(x, y,radius) {
    var options = {
        isStatic : true,
        'restitution':0,
        'friction':1.0
        
    }
   
    this.body = Bodies.circle(x, y,30, options);
    this.radius = radius
    this.x = x;
    this.y = y;
    this.image = loadImage("sprites/mango.png");
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    strokeWeight(2)
    stroke("green")
    fill("brown");
   image(this.image, 0, 0,50,50);
    pop();
  }


};