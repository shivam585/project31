class Wood extends Ground{
    constructor(x,y,w,h)
	{
        super(x,y,w,h)
        this.image=loadImage("wood2.png")
    }


display(){
rotate(30)

super.display()
	imageMode(CENTER);
		image(this.image, this.x,this.y,100,20)

}
}