class Tree
{
	constructor(x,y)
	{
		this.x=x;
		this.y=y;
		this.treeWidth=50;
		this.treeHeight=50;
		this.treeThickness=50;
		
		this.image=loadImage("redballvillan2.png")
		this.bottomBody=Bodies.rectangle(this.x, this.y, this.treeWidth, this.treeThickness, {isStatic:true,density:0.000002})
		World.add(world, this.bottomBody)

	}
	
	display()
	{
			var posBottom=this.bottomBody.position;
			push()
			translate(posBottom.x, posBottom.y+10);
			fill(255)
			imageMode(CENTER);
			image(this.image, 0,-this.treeHeight/2,100,100)
			pop()
			
	}

}
