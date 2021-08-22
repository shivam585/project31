
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;

var tree, stone,ground;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10,mango11,mango12;
var world,boy;


var launcher;
var fruit1,fruit2,fruit3

function preload(){
	boy=loadImage("cartooncatapult.png");
  backgroundimage=loadImage("cherryblossombackground.jpg")
}

function setup() {
	createCanvas(1300,650);
	engine = Engine.create();
	world = engine.world;

	stone = new Stone(235,420,30); 
  stone2 = new Stone2(1150,360,30); 


	mango1 = new Mango(600,350,30);
  mango2 = new Mango(750,350,30);
	mango3 = new Mango(800,350,30);
	mango4 = new Mango(900,350,30);
//	mango5 = new Mango(950,250,30);
	mango6 = new Mango(1000,350,30);

	ground = new Ground(width/2,600,width,20);
  ground2 = new Ground(200,555,350,70);
  ground3 = new Ground(width/2,0,width,20);
  ground4 = new Ground(1300,300,20,height);


  platform2 = new Ground(1160,410,170,20);
  platform3= new Ground(1250,350,20,150);


  fruit1 = new Tree(600,500);
 // fruit2 = new Tree(850,100);
  fruit3 = new Tree(850,500);
  fruit4 = new Tree(600,100);
  fruit5 = new Tree(1100,100);
  fruit6 = new Tree(1100,500);

  





  //create launcher with stone as bodyA
  launcher = new Launcher(stone.body,{x:300,y:280});

	Engine.run(engine);
}

function draw() {

  background(backgroundimage);
  Engine.update(engine);
  textSize(60);
  textFont("Algerian")
  fill("green")
  text("Help me reach my friend",50 ,50);

  image(boy ,200,230,200,300);
  

  stone.display();
  stone2.display();


  mango1.display();
  mango2.display();
  mango3.display();
 mango4.display();
 // mango5.display();
  mango6.display();

 

  ground.display();
  ground2.display();
  ground3.display();

  ground4.display();

  platform2.display()

  platform3.display()


  fruit1.display();
 //fruit2 .display();
  fruit3.display();
  fruit4.display();
  fruit5.display();
  fruit6.display();




  launcher.display();


  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
 detectollision(stone,mango4);
 // detectollision(stone,mango5);
  detectollision(stone,mango6);
  detectollision(stone,stone2);


  if(stone.body.position.x===stone2.body.position.x||stone.body.position.x>stone2.body.position.x||stone.body.position.x<stone2.body.position.x&&stone.body.position.x>1090&&stone.body.position.x<1200&&stone.body.position.y<310){
    textFont("Algerian")
    fill("red")
    textSize(70)
  text("thank you",700,300)
  }

  if(mango1.body.position.y>400&&mango1.body.position.x<650){
    textFont("Algerian")
    fill("red")
    textSize(40)
  text("killed",550,550)  
  }

  if(mango2.body.position.y>700&&mango2.body.position.x<650){
    textFont("Algerian")
    fill("red")
    textSize(40)
  text("killed",800,550)  
  }

  if(mango3.body.position.y>1000&&mango3.body.position.x<650){
    textFont("Algerian")
    fill("red")
    textSize(40)
  text("killed",1100,550)  
  }
  
  
  
}

function mouseDragged()
{
  // Set position of stone when mouse is dragged
	Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY});
}

function mouseReleased()
{
	launcher.fly();
}



function detectollision(lstone,lmango){


  mangoBodyPosition=lmango.body.position
  stoneBodyPosition=lstone.body.position
  
  var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
  	if(distance<=lmango.r+lstone.r)
    {
  	  Matter.Body.setStatic(lmango.body,false);
      
    }

  }