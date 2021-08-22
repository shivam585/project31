class Ground
{
	constructor(x,y,w,h)
	{
		var options={
			isStatic:true,
			restitution :20
			
			}
		this.x=x;
		this.y=y;
		this.w=w
		this.h=h
		this.body=Bodies.rectangle(x, y, w, h , options);
this.body.shapeColor=("brown")
 		World.add(world, this.body);

	}
	display()
	{
			var groundPos=this.body.position;		
			push()
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER)
			fill("brown")
			rect(0,0,this.w, this.h);

			pop()
			
	}

}