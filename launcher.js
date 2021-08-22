class Launcher{
	constructor(body,anchor)
	{
		
		var options={ 
			bodyA:body,			 
			pointB:anchor, 
			stiffness:0.0009, 
			length:10
			
		}
		
		this.bodyA=body
		this.pointB=anchor
		this.launcher=Constraint.create(options)
		World.add(world,this.launcher)
	}

	attach(body){
		this.launcher.bodyA=body;
	}

	fly()
	{
		this.launcher.bodyA=null
	}

	display()
	{
		if(this.launcher.bodyA)
		{
			var pointA=this.bodyA.position;
			var pointB=this.pointB

			strokeWeight(5);		
			line(pointA.x,pointA.y,pointB.x,pointB.y);
			line(pointA.x,pointA.y,pointB.x,pointB.y+100);

		}
	}
}