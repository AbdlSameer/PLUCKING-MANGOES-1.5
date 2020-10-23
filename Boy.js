class Boy
{
    constructor(x,y,width,height)
    {
       var options = {
            isStatic : true
        }

        this.body = Bodies.rectangle(x,y,width,height,options)

        this.x = x;
        this.y = y;
        this.image = loadImage("sprites/boy.png")

        World.add(world,this.body)
    }

    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;
        push()
       
       
        strokeWeight(2)
        stroke("green")
        fill("brown")
        image(this.image,pos.x,pos.y,150,200)
        pop()
    }
}