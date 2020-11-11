const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world,box1,box2, box5
var ground;
var pig1;
var log1;
var log3, log4;

var bird;


var box3, box4, pig2, log2;
function setup() {
 var canvas= createCanvas(1200,400);
 engine=Engine.create();
 world=engine.world;
 
 ground = new Ground(0,380, 1200, 20);
 box1= new Box(200,320,50,50);
 
 box2= new Box(400,320,50,50);
 pig1 = new Pig(300,320,50,50);
 log1 = new Log(300, 260, 10, 280, PI/2);

 box3 = new Box(200,240,50,50);
 
 box4= new Box(400,240,50,50);
 pig2 = new Pig(300,240,50,50);
 log2 = new Log(300, 180, 10, 280, PI/2);

 box5 = new Box(300, 160, 50, 50);

 log3 = new Log(215, 150, 10, 125, PI/7);
 log4 = new Log(357, 150, 10, 125,-PI/7);

 bird = new Bird(50, 50, 20, 20);
}

function draw() {
  background("orange");
  Engine.update(engine);
 
box1.display();
box2.display();
ground.display();
pig1.display();
log1.display();


box4.display();
box3.display();
pig2.display();
log2.display();
box5.display();
log3.display();
log4.display();
bird.display();
}





