class Stone
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0,
			friction:1,
			density:5
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("cartoonredball.png");
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			imageMode(CENTER);
			image(this.image, 0,0,150, 100)
			pop();
			
	}

}