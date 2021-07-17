
const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies
const Constraint = Matter.Constraint

var engine,world;
var block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;
var ground;
var SlingShot;






function preload(){
polygon_image=loadImage("polygon.png");
}

function setup() {
  createCanvas(1200,400);

  engine=Engine.create();
  world=engine.world;

  block1=new Block(500,360,40,50);
  block2=new Block(540,360,40,50);
  block3=new Block(580,360,40,50);
  block4=new Block(620,360,40,50);
  block5=new Block(660,360,40,50);
  block6=new Block(700,360,40,50);
  block7=new Block(740,360,40,50);
  block8=new Block(540,300,40,50);
  block9=new Block(580,300,40,50);
  block10=new Block(620,300,40,50);
  block11=new Block(660,300,40,50);
  block12=new Block(700,300,40,50);
  block13=new Block(580,240,40,50);
  block14=new Block(620,240,40,50);
  block15=new Block(660,240,40,50);
  block16=new Block(620,380,40,50);

 

  ground=new Ground(620,400,380,30);
  
   polygon = Bodies.circle(50,200,20,{density:2});
   World.add(world,polygon);

   SlingShot = new Slingshot(polygon,{x:100,y:200});

   

}

function draw() {

  background("white");
  Engine.update(engine)

  imageMode(CENTER)
  image(polygon_image,polygon.position.x,polygon.position.y,40,40);

block1.display(); 
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();
block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();
SlingShot.display();


ground.display();

}
function mouseDragged(){
  Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY})
}

function mouseReleased(){

  SlingShot.fly()
}