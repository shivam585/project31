class Stone2
{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution:0,
			friction:1,
			density:1
			}
		this.x=x;
		this.y=y;
		this.r=r
		this.image=loadImage("caroonpinkball.png");
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var stonepos=this.body.position;		
			push()
			translate(stonepos.x, stonepos.y);
			imageMode(CENTER);
			image(this.image, 0,0,100,100)
			pop();
			
	}

}