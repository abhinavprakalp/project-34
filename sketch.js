var Engine = Matter.Engine,
  World = Matter.World,
  Bodies = Matter.Bodies,
  Constraint = Matter.Constraint;

  var ground;
  var ball1,ball2,ball3,ball4,ball5;

function setup() {
  createCanvas(1200, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground (600,680,1200,20);
  ball1 = new Ball (400,400);
  ball2 = new Ball (440,400);
  ball3 = new Ball (480,400);
  ball4 = new Ball (520,400);
  ball5 = new Ball (560,400);


  rope1 = new Rope (ball1.body,{x:400,y:200});
  rope2 = new Rope (ball2.body,{x:440,y:200});
  rope3 = new Rope (ball3.body,{x:480,y:200});
  rope4 = new Rope (ball4.body,{x:520,y:200});
  rope5 = new Rope (ball5.body,{x:560,y:200});
    
}
 


function draw() {
  background("black");
  Engine.update(engine);

  ground.display();

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
}

function mouseDragged(){
  Matter.Body.setPosition(ball1.body, {x: mouseX , y: mouseY});
}
