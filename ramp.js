class Ramp
{
	constructor(x,y,w,h)
	{
		var options10={
			isStatic:true			
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options10);
        this.image=loadImage("wood2.png")

 		World.add(world, this.body);

	}
	display()
	{
        rotate(30)

			var groundPos=this.body.position;		
			push()
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER)
            imageMode(CENTER);
		image(this.image, this.x,this.y,100,20)

			pop()
			
	}

}